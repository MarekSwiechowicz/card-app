import { AppRegistry } from "react-native";
import { YellowBox } from "react-native";
import App from "./App";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
YellowBox.ignoreWarnings(["Class RCTCxxModule"]);
YellowBox.ignoreWarnings(["Module RNFetchBlob requires"]);

AppRegistry.registerComponent("Supercard", () => App);
