import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { Icon } from "react-native-elements";
import { CachedImage } from "react-native-cached-image";
import * as Animatable from "react-native-animatable";
import { Separator, EmptyBackground, LoadingIndicator } from "../common";
import { fetchRewards, fetchRedeem, fetchSubRewards } from "../../actions";

class EntertainmentScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "ENTERTAINMENT",
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
    StatusBar.setHidden(false);
  }

  hasSubRewards(item) {
    this.props.fetchSubRewards(item.urlName),
      this.props.navigation.navigate("SubRewardsScreen", {
        title: item.name,
        urlName: item.urlName
      });
  }

  noSubRewards(item) {
    this.props.fetchRedeem("Reward", item.urlName),
      this.props.navigation.navigate("OfferDetailsScreen", {
        title: item.name
      });
  }

  render() {
    const { loading } = this.props;
    return loading ? (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={"small"} color={"#e41567"} />
      </View>
    ) : (
      <View style={{ backgroundColor: "white" }}>
        <Animatable.View animation="fadeIn">
          <FlatList
            data={this.props.entertainment.rewards}
            ListEmptyComponent={EmptyBackground}
            ItemSeparatorComponent={Separator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  item.hasSubReward
                    ? this.hasSubRewards(item)
                    : this.noSubRewards(item);
                }}
              >
                <CachedImage
                  style={styles.imageContainer}
                  loadingIndicator={LoadingIndicator}
                  source={{
                    uri: `https://supercardblack.com/content/images/${
                      item.image
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
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  imageContainer: {
    height: 220
  },
  headerImage: {
    marginLeft: 8,
    height: 50,
    width: 50,
    resizeMode: "contain"
  },
  rewardsLabel: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    fontSize: 16,
    padding: 6,
    marginLeft: 10,
    fontFamily: "DIN-Bold",
    color: "#e41567",
    position: "absolute",
    bottom: 10
  }
});

const mapStateToProps = state => {
  const { entertainment, loading, error } = state.rewards;
  return { entertainment, loading, error };
};

export default connect(
  mapStateToProps,
  { fetchRewards, fetchRedeem, fetchSubRewards }
)(EntertainmentScreen);
