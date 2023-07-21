import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Icon } from "react-native-elements";
import { fetchAccountDetails, fetchContactDetails } from "../../actions";

class MyAccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "My Account",
    tabBarVisible: false,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 20,
      fontWeight: "500"
    },
    headerBackTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 20,
      fontWeight: "500"
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(null);
        }}
      >
        <View style={{ height: 30, width: 40, marginBottom: 4 }}>
          <Icon
            name="ios-arrow-back"
            size={34}
            type="ionicon"
            color="white"
            onPress={() => {
              navigation.goBack(null);
            }}
            underlayColor="transparent"
          />
        </View>
      </TouchableOpacity>
    )
  });

  render() {
    const { accountLoading, contactLoading } = this.props;
    const { firstName, lastName } = this.props.contactDetails;
    const {
      membershipNumber,
      membershipType,
      membershipStartDate
    } = this.props.accountDetails;

    return accountLoading && contactLoading ? (
      <View style={styles.spinnerContainer}>
        <Spinner type={"FadingCircleAlt"} color={"#e41567"} />
      </View>
    ) : (
      <View style={styles.mainContainer}>
        <Card
          title="PROFILE"
          titleStyle={styles.title}
          containerStyle={styles.card}
          dividerStyle={styles.divider}
        >
          <Text style={styles.sectionTitle}>Member Name:</Text>
          <Text style={styles.bodyText}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.sectionTitle}>Membership Number:</Text>
          <Text style={styles.bodyText}>{`${membershipNumber}`}</Text>
          <Text style={styles.sectionTitle}>Membership Type:</Text>
          <Text style={styles.bodyText}>{`${membershipType}`}</Text>
          <Text style={styles.sectionTitle}>Membership Start Date:</Text>
          <Text style={styles.bodyText}>{`${membershipStartDate}`}</Text>
        </Card>
        <Text style={styles.notes}>
          To change your password or contact details, please visit the My
          Account page on the Supercard website.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  card: {
    borderColor: "#29245c",
    shadowColor: "transparent",
    borderWidth: 0.5
  },
  divider: {
    backgroundColor: "#e41567",
    height: 0.5
  },
  title: {
    backgroundColor: "white",
    fontSize: 20,
    fontFamily: "DIN-Bold",
    color: "#29245c",
    textAlign: "left"
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "500",
    color: "#29245c",
    marginBottom: 5
  },
  bodyText: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "black",
    marginBottom: 20
  },
  notes: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "black",
    margin: 20,
    marginTop: 20
  }
});

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
)(MyAccountScreen);
