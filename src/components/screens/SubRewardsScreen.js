import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Icon } from "react-native-elements";
import { CachedImage } from "react-native-cached-image";
import { Separator, LoadingIndicator, RefreshView } from "../common";
import * as Animatable from "react-native-animatable";
import { fetchRewards, fetchSubRewards, fetchRedeem } from "../../actions";

class SubRewardsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`.toUpperCase(),
    headerBackTitle: "BACK",
    tabBarVisible: true,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0
    },
    headerBackTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 18,
      fontWeight: "500"
    },
    headerTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 16,
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

  renderLoading() {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={"small"} color={"#e41567"} />
      </View>
    );
  }

  renderMain() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Animatable.View animation="fadeIn">
          <FlatList
            data={this.props.item.subRewards}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  this.props.fetchRedeem("SubReward", item.urlName),
                    this.props.navigation.navigate("OfferDetailsScreen", {
                      title: this.props.navigation.state.params.title
                    });
                }}
              >
                <View style={styles.rowContainer}>
                  <CachedImage
                    style={styles.imageContainer}
                    loadingIndicator={LoadingIndicator}
                    source={{
                      uri: `https://supercardblack.com/content/images/${
                        item.image
                      }`
                    }}
                  />
                  <View style={styles.titleContainer}>
                    <Text style={styles.rewardsLabel}>
                      {`${item.name}`.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </Animatable.View>
      </View>
    );
  }

  renderRefresh(error) {
    return (
      <RefreshView onPress={this.onRefreshPress.bind(this)} error={error} />
    );
  }

  onRefreshPress() {
    const { urlName } = this.props.navigation.state.params;
    this.props.fetchSubRewards(urlName);
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  rowContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 140,
    flexDirection: "row",
    alignItems: "center"
  },
  titleContainer: {
    marginLeft: 20,
    width: 140,
    height: 60,
    justifyContent: "center"
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  imageContainer: {
    height: "100%",
    width: Dimensions.get("window").width / 2
  },
  rewardsLabel: {
    fontSize: 18,
    fontFamily: "DIN-Bold",
    color: "#e41567"
  }
});

const mapStateToProps = state => {
  const { item, loading, error } = state.subRewards;
  return { item, loading, error };
};

export default connect(
  mapStateToProps,
  { fetchRewards, fetchSubRewards, fetchRedeem }
)(SubRewardsScreen);
