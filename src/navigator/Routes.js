import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";
import DaysOutScreen from "../components/screens/DaysOutScreen";
import FoodDrinkScreen from "../components/screens/FoodDrinkScreen";
import TravelScreen from "../components/screens/TravelScreen";
import PamperFitnessScreen from "../components/screens/PamperFitnessScreen";
import EntertainmentScreen from "../components/screens/EntertainmentScreen";
import LoginScreen from "../components/screens/LoginScreen";
import SupersavingsScreen from "../components/screens/SupersavingsScreen";
import OfferDetailsScreen from "../components/screens/OfferDetailsScreen";
import AuthLoadingScreen from "../components/screens/AuthLoadingScreen";
import SubRewardsScreen from "../components/screens/SubRewardsScreen";
import MyAccountScreen from "../components/screens/MyAccountScreen";
import ContactUsScreen from "../components/screens/ContactUsScreen";
import FAQScreen from "../components/screens/FAQScreen";
import TermsAndConditionsScreen from "../components/screens/TermsAndConditionsScreen";
import PrivacyPolicyScreen from "../components/screens/PrivacyPolicyScreen";
import EULAScreen from "../components/screens/EULAScreen";
import CardScreen from "../components/screens/CardScreen";
import SideMenu from "../navigator/SideMenu";
import SignOutScreen from "../components/screens/SignOutScreen";
import HomeScreen from "../components/screens/HomeScreen";

const FoodDrinkStack = createStackNavigator({
  FoodDrinkScreen: { screen: FoodDrinkScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  SubRewardsScreen: { screen: SubRewardsScreen }
});

FoodDrinkStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const DaysOutStack = createStackNavigator({
  DaysOutScreen: { screen: DaysOutScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  SubRewardsScreen: { screen: SubRewardsScreen }
});

DaysOutStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const PamperFitnessStack = createStackNavigator({
  PamperFitnessScreen: { screen: PamperFitnessScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  SubRewardsScreen: { screen: SubRewardsScreen }
});

PamperFitnessStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const EntertainmentStack = createStackNavigator({
  EntertainmentScreen: { screen: EntertainmentScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  SubRewardsScreen: { screen: SubRewardsScreen }
});

const HomeStack = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen }
});

EntertainmentStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const TravelStack = createStackNavigator({
  TravelScreen: { screen: TravelScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  SubRewardsScreen: { screen: SubRewardsScreen }
});

TravelStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const SupersavingsStack = createStackNavigator({
  SupersavingsScreen: { screen: SupersavingsScreen },
  OfferDetailsScreen: { screen: OfferDetailsScreen },
  SubRewardsScreen: { screen: SubRewardsScreen }
});

SupersavingsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const AuthStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    TermsAndConditionsScreen: { screen: TermsAndConditionsScreen },
    EULAScreen: { screen: EULAScreen }
  },
  {
    headerMode: "screen"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    FoodDrinkStack: {
      screen: FoodDrinkStack
    },
    DaysOutStack: { screen: DaysOutStack },
    TravelStack: { screen: TravelStack },
    HomeStack: { screen: HomeStack },
    PamperFitnessStack: { screen: PamperFitnessStack },
    EntertainmentStack: { screen: EntertainmentStack },
    SupersavingsStack: { screen: SupersavingsStack }
  },
  {
    initialRouteName: "HomeStack",
    tabBarOptions: {
      activeBackgroundColor: "#e41567",
      inactiveBackgroundColor: "#e41567",
      showIcon: true,
      showLabel: false,
      style: { backgroundColor: "#e41567", borderTopWidth: 0 }
    },

    navigationOptions: ({ navigation }) => ({
      tabBarVisible: true,
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        let size;
        let type;
        switch (routeName) {
          case "FoodDrinkStack":
            iconName = "food";
            size = 28;
            type = "material-community";
            break;
          case "DaysOutStack":
            iconName = "car";
            size = 21;
            type = "font-awesome";
            break;
          case "TravelStack":
            iconName = "flight";
            size = 28;
            break;
          case "HomeStack":
            iconName = "home";
            size = 29;
            break;
          case "PamperFitnessStack":
            iconName = "dumbbell";
            type = "material-community";
            size = 27;
            break;
          case "EntertainmentStack":
            iconName = "local-activity";
            size = 26;
            break;
          case "SupersavingsStack":
            iconName = "shopping-basket";
            type = "font-awesome";
            size = 21;
            break;
          default:
            break;
        }

        return (
          <Icon
            type={type}
            name={iconName}
            size={size}
            color={focused ? "black" : "white"}
          />
        );
      }
    })
  }
);

const MyAccountStack = createStackNavigator({
  MyAccountScreen: { screen: MyAccountScreen }
});

const ContactUsStack = createStackNavigator({
  ContactUsScreen: { screen: ContactUsScreen }
});

const FAQStack = createStackNavigator({
  FAQScreen: { screen: FAQScreen }
});

const TermsAndConditionsStack = createStackNavigator({
  TermsAndConditionsScreen: { screen: TermsAndConditionsScreen }
});

const PrivacyPolicyStack = createStackNavigator({
  PrivacyPolicyScreen: { screen: PrivacyPolicyScreen }
});

const EULAStack = createStackNavigator({
  EULAScreen: { screen: EULAScreen }
});

const DrawerStack = createDrawerNavigator(
  {
    TabNavigator: { screen: TabNavigator },
    CardScreen: { screen: CardScreen },
    MyAccountStack: { screen: MyAccountStack },
    ContactUsStack: { screen: ContactUsStack },
    FAQStack: { screen: FAQStack },
    TermsAndConditionsStack: { screen: TermsAndConditionsStack },
    PrivacyPolicyStack: { screen: PrivacyPolicyStack },
    EULAStack: { screen: EULAStack }
  },
  {
    headerMode: "none",
    mode: "modal",
    drawerPosition: "right",
    contentComponent: SideMenu,
    drawerBackgroundColor: "transparent"
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    SignOut: SignOutScreen,
    Auth: AuthStack,
    App: DrawerStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
