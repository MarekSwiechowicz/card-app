import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  AppState,
  NetInfo
} from "react-native";
import { Icon } from "react-native-elements";
import { CachedImage } from "react-native-cached-image";
import { EmptyBackground, LoadingIndicator } from "../common";
import * as Keychain from "react-native-keychain";
import {
  fetchCategories,
  fetchRewards,
  fetchRedeem,
  fetchAccountDetails
} from "../../actions";
import NavigationService from "../../navigator/NavigationService";
import {
  BASE_URL,
  DAYS_OUT,
  FOOD_DRINK,
  TRAVEL,
  PAMPER_FITNESS,
  ENTERTAINMENT,
  SUPERSAVINGS
} from "../../actions/types";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "HOME",
    tabBarVisible: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 18,
      fontWeight: "500"
    },
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <View style={{ height: 30, width: 40, margin: 4, marginBottom: 0 }}>
          <Icon
            name="dehaze"
            size={28}
            color="white"
            onPress={() => {
              navigation.toggleDrawer();
            }}
            underlayColor="transparent"
          />
        </View>
      </TouchableOpacity>
    )
  });

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    StatusBar.setHidden(false);
    this.props.fetchCategories();
    this.fetchRewards();
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    // Fetch data if app has entered the foreground after checking credentials.
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      this._bootstrapAsync();
    }
    this.setState({ appState: nextAppState });
  };

  fetchRewards = () => {
    this.props.fetchRewards("DaysOut", DAYS_OUT);
    this.props.fetchRewards("FoodDrink", FOOD_DRINK);
    this.props.fetchRewards("Travel", TRAVEL);
    this.props.fetchRewards("PamperFitness", PAMPER_FITNESS);
    this.props.fetchRewards("Entertainment", ENTERTAINMENT);
    this.props.fetchRewards("Supersavings", SUPERSAVINGS);
  };

  _bootstrapAsync = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        var url = `${BASE_URL}login`;
        var data = JSON.stringify({
          Email: credentials.username,
          Password: credentials.password
        });

        NetInfo.isConnected.fetch().done(isConnected => {
          if (isConnected) {
            fetch(url, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: data
            })
              .then(async response => {
                const { status } = response;
                switch (status) {
                  case 200:
                    return this.fetchRewards();
                  default:
                    await Keychain.resetGenericPassword();
                    return this.props.navigation.navigate("Auth");
                }
              })
              .catch(async error => {
                console.error(error);
              });
          } else {
            console.log("Error: Please verify your internet connection.");
          }
        });
      } else {
        console.log("No credentials stored");
        this.props.navigation.navigate("Auth");
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
      this.props.navigation.navigate("Auth");
    }
  };

  renderBanner() {
    const { membershipType } = this.props.accountDetails;
    if (membershipType === "Supercard Black") {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.props.fetchRedeem("Reward", "Insurance"),
              this.props.navigation.navigate("OfferDetailsScreen", {
                title: "Mobile phone and gadget Insurance"
              });
          }}
        >
          <Image
            source={require("../../Images/Banner.png")}
            style={styles.banner}
          />
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { loading } = this.props;
    return loading ? (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={"small"} color={"#e41567"} />
      </View>
    ) : (
      <View>
        <ScrollView>
          {this.renderBanner()}
          <FlatList
            data={this.props.categories}
            ListEmptyComponent={EmptyBackground}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  let screen;
                  switch (item.urlName) {
                    case "FoodDrink":
                      screen = "FoodDrinkStack";
                      break;
                    case "DaysOut":
                      screen = "DaysOutStack";
                      break;
                    case "Travel":
                      screen = "TravelStack";
                      break;
                    case "DaysOut":
                      screen = "DaysOutStack";
                      break;
                    case "PamperFitness":
                      screen = "PamperFitnessStack";
                      break;
                    case "Entertainment":
                      screen = "EntertainmentStack";
                      break;
                    case "Supersavings":
                      screen = "SupersavingsStack";
                      break;
                  }
                  return NavigationService.navigate(screen);
                }}
              >
                <CachedImage
                  style={styles.imageContainer}
                  loadingIndicator={LoadingIndicator}
                  resizeMode={"cover"}
                  source={{
                    uri: `https://supercardblack.com/content/images/${
                      item.imageName
                    }`
                  }}
                >
                  <Text style={styles.rewardsLabel}>
                    {`${item.name}`.toUpperCase()}
                  </Text>
                </CachedImage>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  banner: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width,
    resizeMode: "contain"
  },
  imageContainer: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2
  },
  headerImage: {
    marginLeft: 8,
    height: 50,
    width: 50,
    resizeMode: "contain"
  },
  rewardsLabel: {
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: "white",
    fontSize: 16,
    padding: 4,
    marginLeft: 10,
    fontFamily: "DIN-Bold",
    justifyContent: "center",
    color: "#e41567",
    position: "absolute",
    bottom: 10
  }
};

const mapStateToProps = state => {
  const { accountDetails, accountLoading, accountError } = state.account;
  const { categories, loading, error } = state.categories;
  return {
    categories,
    loading,
    error,
    accountDetails,
    accountLoading,
    accountError
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories, fetchRewards, fetchRedeem, fetchAccountDetails }
)(HomeScreen);
