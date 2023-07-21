import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import SplashScreen from "react-native-splash-screen";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  Linking,
  Keyboard,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { emailChanged, passwordChanged, loginUser } from "../../actions";
import NavigationService from "../../navigator/NavigationService";

class LoginScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  componentDidMount() {
    StatusBar.setHidden(true);
    SplashScreen.hide();
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    Keyboard.dismiss();
    this.props.loginUser({ email, password });
  }

  renderLogo() {
    return (
      <View style={styles.logoContainer}>
        <Image
          source={require("../../Images/patern_background.png")}
          style={styles.logo}
          resizeMode={"cover"}
        />
      </View>
    );
  }

  renderInput() {
    return (
      <View style={styles.inputGroupedContainer}>
        <Input
          inputContainerStyle={styles.inputContainer}
          autoCapitalize={"none"}
          autoCorrect={false}
          placeholder="Email"
          textContentType={"username"}
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          inputStyle={styles.inputStyle}
        />
        <Input
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          autoCapitalize={"none"}
          autoCorrect={false}
          secureTextEntry
          placeholder="Password"
          textContentType={"password"}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          title="LOGIN"
          titleStyle={styles.buttonTitle}
          onPress={this.onButtonPress.bind(this)}
        />
        <View style={{ height: 50 }}>
          {this.renderLoading()}
          {this.renderError()}
        </View>
      </View>
    );
  }

  renderError() {
    const { error } = this.props;
    if (error) {
      return (
        <Animatable.View animation="fadeIn">
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{error}</Text>
          </View>
        </Animatable.View>
      );
    }
  }

  renderLoading() {
    const { loading } = this.props;
    if (loading) {
      return (
        <View style={styles.errorContainer}>
          <ActivityIndicator size="small" color={"#e41567"} />
        </View>
      );
    }
  }

  renderAgreements() {
    return (
      <View style={styles.agreementsContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            Linking.openURL("https://supercardblack.com/Login/Forgot").catch(
              err => console.error("An error occurred", err)
            )
          }
        >
          <Text style={styles.forgotPassword}> Forgot password? </Text>
        </TouchableOpacity>
        <Text style={styles.conditions}>
          <Text>By logging in you are agreeing to the</Text>
          <Text
            style={{
              fontFamily: "DIN-Regular",
              color: "#e41567",
              fontSize: 16
            }}
            onPress={() =>
              NavigationService.navigate("TermsAndConditionsScreen")
            }
          >
            {" Terms & Conditions"}
          </Text>
          <Text>{" and"}</Text>
          <Text
            style={{
              fontFamily: "DIN-Regular",
              color: "#e41567",
              fontSize: 16
            }}
            onPress={() => NavigationService.navigate("EULAScreen")}
          >
            {" EULA"}
          </Text>
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.renderLogo()}
        {this.renderInput()}
        {this.renderAgreements()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black"
  },
  logo: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").width
  },
  logoContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute"
  },
  slogan: {
    color: "white",
    fontFamily: "DIN-Bold",
    fontSize: 16,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    fontWeight: "600"
  },
  inputStyle: {
    fontFamily: "DIN-Regular",
    fontSize: 20,
    color: "black"
  },
  inputContainer: {
    height: 50,
    width: "100%",
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 4,
    borderBottomWidth: 0
  },
  inputGroupedContainer: {
    alignItems: "center",
    margin: 10,
    marginTop: 0,
    paddingBottom: 20
  },
  agreementsContainer: {
    bottom: 20,
    alignSelf: "center",
    position: "absolute"
  },
  button: {
    backgroundColor: "#e41567",
    height: 50,
    borderRadius: 4
  },
  buttonTitle: {
    fontFamily: "DIN-Bold",
    fontSize: 20
  },
  buttonContainer: {
    marginTop: 0,
    width: "90%"
  },
  forgotPassword: {
    fontFamily: "DIN-Regular",
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  conditions: {
    fontFamily: "DIN-Regular",
    fontSize: 16,
    color: "white",
    paddingTop: 10,
    margin: 20,
    marginBottom: 0,
    textAlign: "center"
  },
  error: {
    fontFamily: "DIN-Regular",
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    margin: 20,
    marginTop: 0
  }
});

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginScreen);
