import { connect } from "react-redux";
import React, { Component } from "react";
import {
  Image,
  FlatList,
  TouchableHighlight,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { ListItem } from "react-native-elements";
import { DrawerActions } from "react-navigation";
import NavigationService from "../navigator/NavigationService";
import { fetchAccountDetails, fetchContactDetails } from "../actions";
import { SafeAreaView } from "react-navigation";

const styles = {
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  card: {
    height: 60,
    width: 90
  },
  cardContainer: {
    margin: 20,
    marginLeft: 24,
    marginBottom: 0,
    width: 90
  },
  cardTitle: {
    marginLeft: 6,
    fontFamily: "DIN-Regular",
    fontSize: 20,
    fontWeight: "600",
    color: "#e41567"
  },
  cardSubtitle: {
    marginLeft: 6,
    fontFamily: "DIN-Regular",
    fontSize: 18,
    fontWeight: "500",
    color: "white"
  },
  FlatListContainer: {
    paddingTop: 10,
    backgroundColor: "#292726",
    borderBottomWidth: 0,
    borderTopWidth: 0
  },
  secondListItemTitle: {
    borderBottomWidth: 0,
    fontSize: 18,
    color: "white",
    fontFamily: "DIN-Regular",
    fontWeight: "500"
  },
  titleStyle: {
    borderBottomWidth: 0,
    fontFamily: "DIN-Regular",
    fontSize: 18,
    fontWeight: "500",
    color: "white"
  },
  containerStyle: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 10,
    paddingLeft: 20
  },
  secondContainerStyle: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 6,
    paddingLeft: 20
  },
  thirdContainerStyle: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 6,
    paddingLeft: 20,
    paddingBottom: 24
  },
  logo: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    resizeMode: "contain",
    position: "absolute"
  },
  logoContainer: {
    flex: 1
  }
};

const menuData = [
  {
    title: "FOOD & DRINK",
    icon: "folder",
    screen: "FoodDrinkStack",
    titleStyle: styles.titleStyle,
    containerStyle: styles.containerStyle
  },
  {
    title: "DAYS OUT",
    icon: "settings",
    screen: "DaysOutStack",
    titleStyle: styles.titleStyle,
    containerStyle: styles.containerStyle
  },
  {
    title: "PAMPER AND FITNESS",
    icon: "help",
    screen: "PamperFitnessStack",
    titleStyle: styles.titleStyle,
    containerStyle: styles.containerStyle
  },
  {
    title: "TRAVEL",
    icon: "notifications",
    screen: "TravelStack",
    titleStyle: styles.titleStyle,
    containerStyle: styles.containerStyle
  },
  {
    title: "ENTERTAINMENT",
    icon: "feedback",
    screen: "EntertainmentStack",
    titleStyle: styles.titleStyle,
    containerStyle: styles.containerStyle
  },
  {
    title: "SUPERSAVINGS",
    icon: "help",
    screen: "SupersavingsStack",
    titleStyle: styles.titleStyle,
    containerStyle: styles.thirdContainerStyle
  },
  {
    title: "Contact Us",
    screen: "ContactUsScreen",
    url: "Contact",
    titleStyle: styles.secondListItemTitle,
    containerStyle: styles.secondContainerStyle
  },
  {
    title: "FAQ's",
    screen: "FAQScreen",
    url: "Faqs",
    titleStyle: styles.secondListItemTitle,
    containerStyle: styles.secondContainerStyle
  },
  {
    title: "Terms & Conditions",
    screen: "TermsAndConditionsScreen",
    url: "Terms",
    titleStyle: styles.secondListItemTitle,
    containerStyle: styles.secondContainerStyle
  },
  {
    title: "Privacy Policy",
    screen: "PrivacyPolicyScreen",
    url: "Privacy",
    titleStyle: styles.secondListItemTitle,
    containerStyle: styles.secondContainerStyle
  },
  {
    title: "EULA",
    screen: "EULAScreen",
    url: "EULA",
    titleStyle: styles.secondListItemTitle,
    containerStyle: styles.secondContainerStyle
  },
  {
    title: "Logout",
    screen: "SignOut",
    titleStyle: styles.secondListItemTitle,
    containerStyle: styles.thirdContainerStyle
  }
];

class SideMenu extends Component {
  componentDidMount() {
    this.props.fetchAccountDetails();
    this.props.fetchContactDetails();
  }

  render() {
    const { firstName, lastName } = this.props.contactDetails;
    const { membershipType } = this.props.accountDetails;
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "black" }}
        forceInset={{ bottom: "never", top: "always" }}
      >
        <TouchableHighlight
          onPress={() => NavigationService.navigate("CardScreen")}
          style={styles.cardContainer}
        >
          <Image
            source={require("../Images/supercard_card_mini.png")}
            style={styles.card}
            resizeMethod="resize"
          />
        </TouchableHighlight>
        <View
          style={{
            backgroundColor: "black",
            margin: 20,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <TouchableOpacity
            onPress={() => NavigationService.navigate("MyAccountScreen")}
          >
            <Text style={styles.cardTitle}>
              {`${firstName} ${lastName}`.toUpperCase()}
            </Text>
          </TouchableOpacity>
          <Text style={styles.cardSubtitle}>{`${membershipType}`}</Text>
        </View>
        <FlatList
          data={menuData}
          style={styles.FlatListContainer}
          renderItem={({ item }) => (
            <ListItem
              underlayColor={"transparent"}
              title={item.title}
              titleStyle={item.titleStyle}
              containerStyle={item.containerStyle}
              hideChevron={true}
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.closeDrawer()),
                  NavigationService.navigate(item.screen.toString());
              }}
            />
          )}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { accountDetails, accountLoading, accountError } = state.account;
  const { contactDetails, contactLoading, contactError } = state.contact;

  return {
    contactDetails,
    contactLoading,
    contactError,
    accountDetails,
    accountLoading,
    accountError
  };
};

export default connect(
  mapStateToProps,
  { fetchAccountDetails, fetchContactDetails }
)(SideMenu);
