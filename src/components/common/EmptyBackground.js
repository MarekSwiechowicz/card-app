import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class EmptyBackground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: "gray"
  }
});

export { EmptyBackground };
