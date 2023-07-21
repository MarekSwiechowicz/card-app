import React from "react";
import { View } from "react-native";

const Section = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "transparent",
    position: "relative"
  }
};

export { Section };
