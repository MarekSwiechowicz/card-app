import React from "react";
import { View } from "react-native";

const CollapsibleView = props => (
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "transparent",
    alignItems: "center",
    position: "relative"
  }
};

export { CollapsibleView };
