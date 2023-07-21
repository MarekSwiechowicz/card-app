import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Picker,
  FlatList,
  Alert,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { CachedImage } from "react-native-cached-image";
import {
  Icon,
  Button,
  Divider,
  Avatar,
  ListItem,
  Card
} from "react-native-elements";
import HTML from "react-native-render-html";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Communications from "react-native-communications";
import {
  getRegions,
  getVenues,
  getVenuesInitialState,
  fetchRedeem
} from "../../actions";
import { BASE_URL } from "../../actions/types";
import { LoadingIndicator, RefreshView } from "../common";
import Analytics from "appcenter-analytics";

class OfferDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: "",
      venuesColapsed: true,
      howCollapsed: true,
      termsCollapsed: true
    };
  }

  static navigationOptions = ({ navigation }) => ({
    headerTintColor: "white",
    tabBarVisible: false,
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0
    },
    headerBackTitleStyle: {
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
    StatusBar.setHidden(false);
    this.props.navigation.addListener("didFocus", () => this.getRegions());
    this.props.navigation.addListener("willBlur", () =>
      this.props.getVenuesInitialState()
    );
  }

  getRegions() {
    const { navRewardId } = this.props.item;

    if (navRewardId) {
      this.props.getRegions(navRewardId);
    }
  }

  renderImage() {
    const { imageLarge } = this.props.item;
    if (imageLarge) {
      return (
        <CachedImage
          resizeMode={"cover"}
          loadingIndicator={LoadingIndicator}
          style={styles.imageContainer}
          source={{
            uri: `https://supercardblack.com/content/images/${imageLarge}`
          }}
        />
      );
    }
  }

  renderTitle() {
    const { name } = this.props.item;
    if (name) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{`${name}`.toUpperCase()}</Text>
        </View>
      );
    }
  }

  renderDescription() {
    const { description } = this.props.item;
    if (description) {
      return (
        <View style={styles.descriptionContainer}>
          <HTML html={description} tagsStyles={styles.htmlDescription} />
        </View>
      );
    }
  }

  toggleVenues() {
    this.state.venuesColapsed
      ? this.setState({ venuesColapsed: false })
      : this.setState({ venuesColapsed: true });
  }

  toggleHow() {
    this.state.howCollapsed
      ? this.setState({ howCollapsed: false })
      : this.setState({ howCollapsed: true });
  }

  toggleTerms() {
    this.state.termsCollapsed
      ? this.setState({ termsCollapsed: false })
      : this.setState({ termsCollapsed: true });
  }

  renderPicker() {
    const { regions } = this.props;
    const { navRewardId } = this.props.item;

    if (regions.length > 0) {
      return (
        <Picker
          style={styles.pickerContainer}
          itemStyle={styles.pickerItem}
          mode="dropdown"
          selectedValue={this.state.region}
          onValueChange={region => this.getVenues(navRewardId, region)}
        >
          <Picker.Item label="Please Select" />
          {regions.map((region, index) => {
            return (
              <Picker.Item
                label={region.RegionName}
                value={region.RegionName}
                key={index}
              />
            );
          })}
        </Picker>
      );
    } else {
      return this.renderNoVenuesAvaiable();
    }
  }

  getVenues(id, region) {
    if (id && region) {
      this.props.getVenues(id, region);
      this.setState({ region });
    }
  }

  renderVenuesDetails() {
    const { venues } = this.props;
    if (venues) {
      return (
        <FlatList
          data={venues}
          style={styles.flatListContainer}
          renderItem={({ item }) => this.renderVenueDetailsCard(item)}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  }

  renderVenueDetailsCard(item) {
    const { VenueName } = item;
    if (VenueName !== "" && VenueName !== null) {
      return (
        <Animatable.View animation="fadeIn">
          <Card
            title={item.VenueName}
            titleStyle={styles.cardTitle}
            containerStyle={styles.cardContainer}
            dividerStyle={styles.cardDivider}
          >
            {this.renderAdrres1(item)}
            {this.renderAdrres2(item)}
            {this.renderCity(item)}
            {this.renderCounty(item)}
            {this.renderPostcode(item)}
            {this.renderPhone(item)}
            {this.renderSendEmailVoucher(item)}
          </Card>
        </Animatable.View>
      );
    } else {
      return this.renderNoVenuesAvaiable();
    }
  }

  renderNoVenuesAvaiable() {
    return (
      <Card
        title={"No venues avaiable for this activity"}
        titleStyle={styles.secondCardTitle}
        containerStyle={styles.secondCardContainer}
        dividerStyle={styles.secondCardDivider}
      />
    );
  }

  renderAdrres1(item) {
    const { Address1 } = item;
    if (Address1 !== "") {
      return <Text style={styles.cardDetails}>{item.Address1}</Text>;
    }
  }

  renderAdrres2(item) {
    const { Address2 } = item;
    if (Address2 !== "") {
      return <Text style={styles.cardDetails}>{item.Address2}</Text>;
    }
  }

  renderCity(item) {
    const { City } = item;
    if (City !== "") {
      return <Text style={styles.cardDetails}>{item.City}</Text>;
    }
  }

  renderCounty(item) {
    const { County } = item;
    if (County !== "") {
      return <Text style={styles.cardDetails}>{item.County}</Text>;
    }
  }

  renderPostcode(item) {
    const { Postcode } = item;
    if (Postcode !== "") {
      return <Text style={styles.cardDetails}>{item.Postcode}</Text>;
    }
  }

  renderPhone(item) {
    const { Phone } = item;
    if (Phone !== "") {
      return <Text style={styles.cardDetails}>{item.Phone}</Text>;
    }
  }

  renderSendEmailVoucher(item) {
    const {
      VenueName,
      Address1,
      Address2,
      City,
      County,
      Region,
      Postcode,
      Phone
    } = item;
    const { id, name } = this.props.item;
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          this.emailVoucher(
            id,
            VenueName,
            Address1,
            Address2,
            City,
            County,
            Region,
            Postcode,
            Phone
          );
          Analytics.trackEvent("Redemptions", {
            Offer: `${this.props.navigation.state.params.title}`,
            Venue: `${VenueName}`
          });
        }}
      >
        <View style={styles.emailVoucherContainer}>
          <Icon
            name={"email"}
            color={"#e41567"}
            containerStyle={styles.emailIconContainer}
          />
          <Text style={styles.emailVoucher}>Email Voucher</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderVenues() {
    const { navRewardId } = this.props.item;

    if (navRewardId) {
      return (
        <View>
          <TouchableOpacity
            onPress={this.toggleVenues.bind(this)}
            activeOpacity={0.7}
          >
            <View style={styles.collapsibleView}>
              <Text style={styles.sectionOneTitle}>{"Venues"}</Text>
            </View>
            <Divider style={styles.divider} />
          </TouchableOpacity>
          <Collapsible
            aling={"bottom"}
            collapsed={this.state.venuesColapsed}
            duration={200}
          >
            {this.renderPicker()}
            {this.renderVenuesDetails()}
          </Collapsible>
        </View>
      );
    }
  }

  renderHow() {
    const { faqsHeader, faqsContent } = this.props.item;
    if (faqsHeader) {
      return (
        <View>
          <TouchableOpacity
            onPress={this.toggleHow.bind(this)}
            activeOpacity={0.7}
          >
            <View style={styles.collapsibleView}>
              <Text style={styles.sectionOneTitle}>{faqsHeader}</Text>
            </View>
            <Divider style={styles.divider} />
          </TouchableOpacity>
          <Collapsible aling={"center"} collapsed={this.state.howCollapsed}>
            <HTML
              html={faqsContent}
              containerStyle={{
                flex: 1,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20
              }}
              tagsStyles={styles.htmlTerms}
              onLinkPress={(evt, href) => {
                Linking.openURL(href).catch(err =>
                  console.error("An error occurred (ID-99)", err)
                );
              }}
            />
          </Collapsible>
        </View>
      );
    }
  }

  renderTerms() {
    const { termsHeader, termsContent } = this.props.item;
    if (termsHeader) {
      return (
        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity
            onPress={this.toggleTerms.bind(this)}
            activeOpacity={0.7}
          >
            <View style={styles.collapsibleView}>
              <Text style={styles.sectionOneTitle}>{termsHeader}</Text>
            </View>
            <Divider style={styles.divider} />
          </TouchableOpacity>
          <Collapsible
            aling={"bottom"}
            collapsed={this.state.termsCollapsed}
            duration={200}
          >
            <HTML
              containerStyle={{
                flex: 1,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20
              }}
              html={termsContent}
              tagsStyles={styles.htmlTerms}
              onLinkPress={(evt, href) => {
                Linking.openURL(href).catch(err =>
                  console.error("An error occurred (ID-99)", err)
                );
              }}
            />
          </Collapsible>
        </View>
      );
    }
  }

  renderCallConcierge() {
    const { callConcierge, callVenue, name } = this.props.item;
    let title;
    let phoneNumber;
    if (callConcierge || callVenue) {
      callConcierge ? (title = "CALL CONCIERGE") : (title = "CALL VENUE"),
        callConcierge
          ? (phoneNumber = callConcierge)
          : (phoneNumber = callVenue);
      return (
        <ListItem
          title={title}
          subtitle={phoneNumber}
          titleStyle={{
            fontFamily: "DIN-Regular",
            fontWeight: "500",
            fontSize: 18,
            textAlign: "left",
            color: "#29245c"
          }}
          subtitleStyle={{
            fontFamily: "DIN-Regular",
            fontWeight: "500",
            fontSize: 27,
            textAlign: "left",
            color: "#29245c"
          }}
          containerStyle={{ margin: 50, marginTop: 10, marginBottom: 20 }}
          onPress={() => Communications.phonecall(phoneNumber, false)}
          leftAvatar={
            <Avatar
              size="medium"
              rounded
              icon={{ name: "phone", color: "#e41567", size: 30 }}
              overlayContainerStyle={{
                backgroundColor: "white",
                borderColor: "#e41567",
                borderWidth: 3
              }}
              onPress={() => {
                Communications.phonecall(phoneNumber, false);
                Analytics.trackEvent("Concierge", { Offer: name });
              }}
              activeOpacity={0.7}
            />
          }
        />
      );
    }
  }

  renderRewardCode() {
    const { rewardCode, emailUniqueCode } = this.props.item;
    if (rewardCode && emailUniqueCode === false) {
      return (
        <View style={styles.rewardCodeContainer}>
          <Text style={styles.rewardCode}>{`Code: ${rewardCode}`}</Text>
        </View>
      );
    }
  }

  renderRedeemButton() {
    const {
      linkToPartnerSite,
      takeTwoCinema,
      filmologyLogin,
      hotelExpress,
      emailUniqueCode,
      svmParameter,
      name
    } = this.props.item;

    let string = "";
    let buttonTitle = "REDEEM OFFER";
    let link = linkToPartnerSite;

    if (linkToPartnerSite && emailUniqueCode === false) {
      if (svmParameter) {
        string = svmParameter;
      }

      if (hotelExpress !== null) {
        buttonTitle = "SEARCH HOTELS";
        link = "https://supercardblack.com/PGap/HotelExpress";
      }

      if (filmologyLogin !== null) {
        buttonTitle = "SEARCH CINEMAS";
        link = "https://supercardblack.com/PGap/Filmology";
      }

      if (takeTwoCinema !== null) {
        link = "https://supercardblack.com/PGap/TakeTwoCinema";
      }

      return (
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          title={buttonTitle}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            Analytics.trackEvent("Redemptions", { Offer: name });
            Linking.openURL(`${link}${string}`).catch(err =>
              console.error("An error occurred (ID-98)", err)
            );
          }}
        />
      );
    }
  }

  renderEmailVoucherButton() {
    const {
      emailVoucher,
      navRewardId,
      id,
      linkToPartnerSite,
      name
    } = this.props.item;
    if (emailVoucher && !navRewardId && id && !linkToPartnerSite) {
      return (
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          title={"EMAIL VOUCHER"}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            this.emailVoucher(id);
            Analytics.trackEvent("Redemptions", {
              Offer: this.props.navigation.state.params.title
            });
          }}
        />
      );
    }
  }

  emailVoucher(
    id,
    VenueName = null,
    Address1 = null,
    Address2 = null,
    City = null,
    County = null,
    Region = null,
    Postcode = null,
    Phone = null
  ) {
    var url = `${BASE_URL}emailVoucher`;
    var data = JSON.stringify({
      RedemptionMechanicId: id,
      VenueName: VenueName,
      Address1: Address1,
      Address2: Address2,
      City: City,
      County: County,
      Region: Region,
      Postcode: Postcode,
      Phone: Phone
    });
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(response => {
        const { status } = response;
        switch (status) {
          case 200:
            return this.emailVoucherSucessAlert(true);
          case 400:
            return console.log("Failed to send email.");
          case 500:
            return console.log("Failed to send email.");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  emailVoucherSucessAlert(success) {
    let title = "Success";
    let message = "Voucher has been sent.";
    if (!success) {
      title = "Failed";
      message = "Failed to email voucher.";
    }
    return Alert.alert(
      "Success",
      "Voucher has been sent.",
      [{ text: "OK", onPress: () => console.log(message) }],
      { cancelable: false }
    );
  }

  renderLoading() {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={"small"} color={"#e41567"} />
      </View>
    );
  }

  renderMain() {
    return (
      <ScrollView style={styles.mainContainer}>
        <Animatable.View animation="fadeIn">
          {this.renderImage()}
          {this.renderTitle()}
          {this.renderDescription()}
          {this.renderRewardCode()}
          {this.renderRedeemButton()}
          {this.renderEmailVoucherButton()}
          {this.renderCallConcierge()}
          {this.renderVenues()}
          {this.renderHow()}
          {this.renderTerms()}
        </Animatable.View>
      </ScrollView>
    );
  }

  onRefreshPress() {
    const { urlName } = this.props.item;
    this.props.fetchRedeem("Reward", urlName);
  }

  renderRefresh(error) {
    return (
      <RefreshView onPress={this.onRefreshPress.bind(this)} error={error} />
    );
  }

  render() {
    const { loading, error } = this.props;
    if (loading) {
      return this.renderLoading();
    } else {
      if (!error) {
        return this.renderMain();
      } else {
        return this.renderRefresh(error);
      }
    }
  }
}

const styles = {
  mainContainer: {
    backgroundColor: "white",
    flex: 1
  },
  imageContainer: {
    flex: 1,
    top: 0,
    height: 220,
    width: "100%"
  },
  descriptionContainer: {
    margin: 20
  },
  titleContainer: {
    margin: 20,
    marginBottom: 0
  },
  titleStyle: {
    backgroundColor: "white",
    fontSize: 20,
    fontFamily: "DIN-Bold",
    color: "#29245c",
    textAlign: "left"
  },
  button: {
    backgroundColor: "#e41567",
    width: "100%",
    height: 50,
    borderRadius: 4
  },
  callButton: {
    backgroundColor: "#29245c",
    width: "100%",
    height: 50,
    borderRadius: 4
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 20,
    marginBottom: 20,
    marginTop: 20
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  sectionOneTitle: {
    fontSize: 20,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "#29245c",
    backgroundColor: "transparent"
  },
  sectionTitleContainer: {
    alignItems: "center",
    height: 40,
    alignItems: "center"
  },
  pickerContainer: {
    width: "80%",
    alignSelf: "center"
  },
  pickerItem: {
    fontSize: 24,
    fontFamily: "DIN-Regular",
    fontWeight: "500",
    color: "#29245c"
  },
  collapsibleView: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "100%"
  },
  divider: {
    backgroundColor: "#29245c",
    height: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  htmlDescription: {
    p: {
      fontSize: 19,
      fontFamily: "DIN-Medium",
      textAlign: "justify",
      color: "#29245c"
    }
  },
  htmlTerms: {
    p: {
      fontSize: 18,
      fontFamily: "DIN-Regular",
      fontWeight: "400",
      color: "#29245c",
      padding: 4,
      textAlign: "left"
    },
    a: {
      color: "#e41567"
    },
    strong: {
      color: "#29245c",
      textAlign: "left"
    }
  },
  callConciergeContainer: {
    backgroundColor: "#29245c",
    height: 50,
    width: "100%"
  },
  callConcierge: {
    color: "#29245c",
    fontSize: 24,
    fontFamily: "DIN-Regular",
    fontWeight: "500"
  },
  rewardCode: {
    color: "#29245c",
    fontSize: 19,
    fontFamily: "DIN-Regular",
    fontWeight: "500"
  },
  rewardCodeContainer: {
    margin: 20,
    marginTop: 0
  },
  flatListContainer: {
    backgroundColor: "transparent",
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginBottom: 20
  },
  card: {
    height: 60,
    width: 92,
    resizeMode: "contain",
    margin: 20,
    marginTop: 10,
    marginBottom: 0,
    borderRadius: 4
  },
  cardContainer: {
    borderColor: "#29245c",
    shadowColor: "transparent",
    borderWidth: 0.5
  },
  cardTitle: {
    backgroundColor: "white",
    fontSize: 20,
    fontFamily: "DIN-Bold",
    color: "#29245c",
    textAlign: "left"
  },
  cardDivider: {
    backgroundColor: "#e41567",
    height: 0.5
  },
  cardDetails: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    textAlign: "justify",
    justifyContent: "flex-start",
    color: "#29245c"
  },
  secondCardContainer: {
    borderColor: "#29245c",
    shadowColor: "transparent",
    borderWidth: 0,
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  secondCardTitle: {
    backgroundColor: "white",
    fontSize: 19,
    fontFamily: "DIN-Bold",
    color: "#29245c",
    textAlign: "left"
  },
  secondCardDivider: {
    backgroundColor: "#e41567",
    height: 0
  },
  SecondCardDetails: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    textAlign: "justify",
    justifyContent: "flex-start",
    color: "#29245c",
    margin: 0,
    padding: 0
  },
  emailVoucher: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    justifyContent: "flex-start",
    color: "#e41567"
  },
  emailVoucherContainer: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "flex-end"
  },
  emailIconContainer: {
    backgroundColor: "transparent",
    marginRight: 3
  }
};

const mapStateToProps = state => {
  const { item, loading, error } = state.redeem;
  const { regions, regionsLoading, regionsError } = state.getRegions;
  const { venues, venuesLoading, venuesError } = state.getVenues;
  return {
    item,
    loading,
    error,
    regions,
    regionsLoading,
    regionsError,
    venues,
    venuesLoading,
    venuesError
  };
};

export default connect(
  mapStateToProps,
  { getRegions, getVenues, getVenuesInitialState, fetchRedeem }
)(OfferDetailsScreen);
