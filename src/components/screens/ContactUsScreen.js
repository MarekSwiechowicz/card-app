import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Card, Icon, ListItem, Avatar } from "react-native-elements";
import Communications from "react-native-communications";

class ContactUsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Contact Us",
    tabBarVisible: false,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 20,
      fontWeight: "500"
    },
    headerBackTitleStyle: {
      fontFamily: "DIN-Regular",
      fontSize: 20,
      fontWeight: "500"
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(null);
        }}
      >
        <View style={{ height: 30, width: 40, marginBottom: 4 }}>
          <Icon
            name="ios-arrow-back"
            size={34}
            type="ionicon"
            color="white"
            onPress={() => {
              navigation.goBack(null);
            }}
            underlayColor="transparent"
          />
        </View>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <Card
            title="CONTACT US"
            titleStyle={styles.title}
            containerStyle={styles.card}
            dividerStyle={styles.divider}
          >
            <Text style={styles.bodyText}>
              We are here to help. If you have any questions about Supercard
              that our FAQs haven’t been able to answer, please email or call us
              - details below.
            </Text>
            <Text style={styles.sectionTitle}>General enquiries:</Text>
            <TouchableOpacity
              onPress={() =>
                Communications.email(
                  ["hello@super-card.co.uk"],
                  null,
                  null,
                  null,
                  null
                )
              }
            >
              <Text style={styles.bodyTextThree}>hello@super-card.co.uk</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Booking enquiries:</Text>
            <TouchableOpacity
              onPress={() =>
                Communications.email(
                  ["concierge@super-card.co.uk"],
                  null,
                  null,
                  null,
                  null
                )
              }
            >
              <Text style={styles.bodyTextThree}>
                concierge@super-card.co.uk
              </Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Membership enquiries:</Text>
            <TouchableOpacity
              onPress={() =>
                Communications.email(
                  ["care@super-card.co.uk"],
                  null,
                  null,
                  null,
                  null
                )
              }
            >
              <Text style={styles.bodyTextThree}>care@super-card.co.uk</Text>
            </TouchableOpacity>
            <Text style={styles.sectionTitle}>Address:</Text>
            <Text style={styles.bodyTextTwo}>Cambrian House</Text>
            <Text style={styles.bodyText}>Swansea, SA1 1RH, UK</Text>
            <Text style={styles.sectionTitle}>
              Thinking of leaving us? Need to speak to one of the team?
            </Text>
            <Text style={styles.bodyText}>
              Please call our Supercard Care Team on:
            </Text>
            <ListItem
              title={"Supercard Concierge"}
              subtitle={"0330 124 1223"}
              titleStyle={{
                fontFamily: "DIN-Regular",
                fontWeight: "500",
                fontSize: 18
              }}
              subtitleStyle={{
                fontFamily: "DIN-Regular",
                fontWeight: "500",
                fontSize: 27
              }}
              containerStyle={{ margin: 22, marginTop: 0, marginBottom: 0 }}
              onPress={() => Communications.phonecall("03301241223", true)}
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
                  activeOpacity={0.7}
                />
              }
            />
            <Text style={styles.bodyText}>
              Our hours are Monday to Friday 09:00 – 17:30 NB: Excludes
              Saturdays, Sundays and Bank Holidays.
            </Text>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  card: {
    borderColor: "#29245c",
    shadowColor: "transparent",
    borderWidth: 0,
    margin: 0
  },
  divider: {
    backgroundColor: "#e41567",
    height: 0.5
  },
  title: {
    backgroundColor: "white",
    fontSize: 20,
    fontFamily: "DIN-Bold",
    color: "#29245c",
    textAlign: "left"
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "500",
    color: "black",
    marginBottom: 10
  },
  bodyText: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "black",
    marginBottom: 20
  },
  bodyTextTwo: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "black",
    marginBottom: 0
  },
  bodyTextThree: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "500",
    color: "#e41567",
    marginBottom: 20
  },
  notes: {
    fontSize: 18,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "black",
    margin: 20
  }
});

export default ContactUsScreen;
