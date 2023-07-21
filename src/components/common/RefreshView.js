import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "react-native-elements";

const RefreshView = ({ onPress, error }) => (
  <View style={styles.containerStyle}>
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={"refresh"}
        size={40}
        color={"#e41567"}
        containerStyle={{ marginBottom: 20 }}
      />
      <Text style={styles.textStyle}>{`${error}`}</Text>
      <Text style={styles.textStyle}>Try again.</Text>
    </TouchableOpacity>
  </View>
);

const styles = {
  containerStyle: {
    position: "absolute",
    height: Dimensions.get("window").height - 60,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "DIN-Regular",
    color: "#e41567"
  }
};

export { RefreshView };
