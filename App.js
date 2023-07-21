import React, { Component } from "react";
import NavigationService from "./src/navigator/NavigationService";
import { Provider } from "react-redux";
import Router from "./src/navigator/Routes";
import { NetInfo } from "react-native";
import codePush from "react-native-code-push";
import "./src/navigator/ReactotronConfig";
import { store, persistor } from "./src/store/ConfigureStore";
import { PersistGate } from "redux-persist/integration/react";
import Reactotron from "reactotron-react-native";

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export default class App extends Component {
  componentDidMount() {
    // Check for avaiable updates from Codepush
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
      updateDialog: true
    });

    // Start to listen to the network connectvity
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );

    function handleFirstConnectivityChange(isConnected) {
      Reactotron.log("Is internet connection available: ", isConnected);
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            onNavigationStateChange={(prevState, currentState) => {
              const currentScreen = getActiveRouteName(currentState);
              const prevScreen = getActiveRouteName(prevState);
              if (prevScreen !== currentScreen) {
                console.log(currentScreen);
              }
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}
