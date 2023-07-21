import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { fetchAccountDetails, fetchContactDetails } from "../../actions";
import { SafeAreaView } from "react-navigation";

class CardScreen extends Component {
  componentDidMount() {
    StatusBar.setBarStyle("dark-content");
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
    this.frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0]
    });
    this.backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1]
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };

    const { firstName, lastName } = this.props.contactDetails;
    const { membershipNumber } = this.props.accountDetails;

    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white" }}
        forceInset={{ bottom: "always", top: "always" }}
      >
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.closeContainer}>
              <Icon
                name={"highlight-off"}
                color={"#e41567"}
                size={34}
                iconStyle={{ justifyContent: "center", alignItems: "center" }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.container}>
            <View>
              <Animated.View
                style={[
                  styles.flipCard,
                  frontAnimatedStyle,
                  { opacity: this.frontOpacity }
                ]}
              >
                <Image
                  source={require("../../Images/supercard_card.png")}
                  style={styles.card}
                />
                <View style={styles.detailsContainer}>
                  <Text
                    style={styles.username}
                  >{`${firstName} ${lastName}`}</Text>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.membership}>{`${membershipNumber}`}</Text>
                </View>
              </Animated.View>
              <Animated.View
                style={[
                  styles.flipCard,
                  styles.flipCardBack,
                  backAnimatedStyle,
                  { opacity: this.backOpacity }
                ]}
              >
                <Image
                  source={require("../../Images/supercard_card_back.png")}
                  style={styles.card}
                />
              </Animated.View>
            </View>
          </View>
          <View style={styles.tapContainer}>
            <TouchableOpacity onPress={() => this.flipCard()}>
              <Icon
                name={"touch-app"}
                color={"#e41567"}
                size={24}
                containerStyle={styles.tap}
              />
              <Text style={styles.tapToFlip}>TAP TO FLIP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flipCard: {
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    height: 445,
    width: 296
  },
  flipCardBack: {
    position: "absolute"
  },
  flipText: {
    width: 90,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  card: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  tap: {
    marginBottom: 5
  },
  tapToFlip: {
    fontFamily: "DIN-Bold",
    fontSize: 14,
    color: "#e41567"
  },
  tapContainer: {
    alignSelf: "center",
    margin: 5,
    marginBottom: 5
  },
  detailsContainer: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  username: {
    left: -120,
    top: 150,
    fontFamily: "DIN-Regular",
    fontWeight: "500",
    fontSize: 24,
    color: "black",
    transform: [{ rotate: "90deg" }]
  },
  membership: {
    left: -120,
    top: 268,
    fontFamily: "DIN-Regular",
    fontWeight: "500",
    fontSize: 24,
    color: "black",
    transform: [{ rotate: "90deg" }],
    textAlign: "right"
  },
  closeContainer: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: 8,
    marginBottom: 8
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
)(CardScreen);
