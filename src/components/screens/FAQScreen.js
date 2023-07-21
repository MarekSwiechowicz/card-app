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

class FAQScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "FAQs",
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
            title="FREQUENTLY ASKED QUESTIONS"
            titleStyle={styles.title}
            containerStyle={styles.card}
            dividerStyle={styles.divider}
          >
            <Text style={styles.sectionTitle}>What is Supercard?</Text>
            <Text style={styles.bodyText}>
              Supercard is a membership programme, full of fabulous freebies and
              delightful discounts.
            </Text>
            <Text style={styles.sectionTitle}>How do I register?</Text>
            <Text style={styles.bodyText}>
              Click on the “join now” button and complete all the fields on our
              registration page, when you press submit you will be moments away
              from the new super you.
            </Text>
            <Text style={styles.sectionTitle}>What happens next?</Text>
            <Text style={styles.bodyText}>
              Eager to access your new superpowers? When you join, you will
              receive your welcome email, click on the link and you have access
              to all your Supercard rewards. Your membership is active
              immediately upon successful registration. Once you activate your
              account, it takes 2-3 working days to despatch your welcome pack
              with your sparkly new Supercard. In the meantime, download the
              Supercardblack app where we will have stored a virtual copy of
              your supercard so you can access your superpowers on the go!
            </Text>
            <Text style={styles.sectionTitle}>
              How much does Supercardblack cost?
            </Text>
            <Text style={styles.bodyText}>
              You can enjoy all of the Supercard rewards for a monthly fee.
              Please refer to your Supercard Welcome email for details or call
              our Concierge Team on 0330 124 1223 with any questions.
            </Text>
            <Text style={styles.sectionTitle}>
              What will I see on my credit/debit card statement?
            </Text>
            <Text style={styles.bodyText}>
              Your monthly Supercard membership shows as www.supercardblack.com
              is on your statement, if you have any questions, please contact
              us.
            </Text>
            <Text style={styles.sectionTitle}>
              How can I contact Supercard?
            </Text>
            <Text style={styles.bodyText}>
              Call us on 0330 124 1223 or send us an email at
              hello@super-card.co.uk.
            </Text>
            <Text style={styles.sectionTitle}>
              Do I need to show my Supercard as well as my Supervoucher at the
              venues?
            </Text>
            <Text style={styles.bodyText}>
              Your Superpowers are unique to you and with so many impersonators,
              we always advise our Supercard members to keep their Supercard
              with them, as proof of membership.
            </Text>
            <Text style={styles.sectionTitle}>
              I have lost my Supercard, how can I get a new one?
            </Text>
            <Text style={styles.bodyText}>
              We recommend that you keep your Supercard safe but in the event it
              gets lost, we will replace it for free, after which, should you
              lose it again we may need to make a small charge. To get your
              replacement card please call our Concierge Team on 0330 124 1223.
            </Text>
            <Text style={styles.sectionTitle}>I can’t log into my account</Text>
            <Text style={styles.bodyText}>
              Occasionally we need to make updates to our treats for you, which
              we will try to do as quickly as possible. At these times we will
              post a message on screen to let you know when you will be able to
              access your superpowers. However if there is not a message, you’ve
              checked all your connections and the problem persists, please call
              our Concierge Team on 0330 124 1223.
            </Text>
            <Text style={styles.sectionTitle}>How do I cancel?</Text>
            <Text style={styles.bodyText}>
              We really hope you will love your Supercard but in the event you
              wish to hang up your cape, please call Supercard Concierge on 0330
              124 1223.
            </Text>
            <Text style={styles.sectionTitle}>
              I forgot my password how do I reset it?
            </Text>
            <Text style={styles.bodyText}>
              With so many memories, it’s no wonder we sometimes forget a little
              thing like a password. You have the power to restore it by
              clicking on the “forgot password” button and following the steps.
            </Text>
            <Text style={styles.sectionTitle}>How do I amend my details?</Text>
            <Text style={styles.bodyText}>
              Need to update something? When you have logged into your account,
              you can make changes from your dashboard. Just click on the
              relevant section and don’t forget to save your changes. We may
              send you an email just to confirm we have the right details.
            </Text>
            <Text style={styles.sectionTitle}>
              My voucher did not download how can I get my voucher?
            </Text>
            <Text style={styles.bodyText}>
              Don’t worry, we store copies of your vouchers in your account and
              we send you a copy via email. Why not download our app and then
              you can store virtually and never miss an event.
            </Text>
            <Text style={styles.sectionTitle}>
              I lost my voucher can I reprint?
            </Text>
            <Text style={styles.bodyText}>
              Something went wrong? – it happens – if you download our the
              Supercard app, you can view you voucher, we have also sent a copy
              to your email address.
            </Text>
            <Text style={styles.sectionTitle}>Can I reuse my voucher?</Text>
            <Text style={styles.bodyText}>
              All our vouchers are valid for a limited time, must be accompanied
              by your Supercard and one use only. Full details are shown on each
              Supercard reward.
            </Text>
            <Text style={styles.sectionTitle}>
              eBay customers – how to claim your £10 cashback
            </Text>
            <Text style={styles.bodyText}>
              Members registered via eBay UK. In order to claim your cashback,
              post a copy of your eBay UK order to the address below within 30
              days of your order. We will send a cheque to you within 6 weeks of
              receiving the copy of your purchase. You need to be an active
              Supercard member at time of sending your cheque. Address:
              Supercard, TLC Marketing Worldwide B2C, Cambrian House, Cambrian
              Place, Swansea, SA1 1RH.
            </Text>
            <Text style={styles.sectionTitle}>
              What is the inclusive ZugarZnap Gadget insurance and when does it
              start?
            </Text>
            <Text style={styles.bodyText}>
              You receive cover for gadgets owned by yourself or your immediate
              family with a limit of £1,000 in a 12 month period. The policy
              will be incepted immediately upon successful registration, however
              there is a deferred period of 21 days before you can make a claim.
              The policy continues on a rolling monthly basis providing you pay
              your supercard monthly membership fee. Please read the Insurance
              Product Information Document and the Policy Wording for additional
              information.
            </Text>
            <Text style={styles.sectionTitle}>
              What type of gadgets are covered?
            </Text>
            <Text style={styles.bodyText}>
              The policy covers portable electronic item(s) which belong to you
              or an immediate family member, as evidenced by proof of purchase
              or evidence of ownership, which are no more than 36 months old at
              the time this policy was first incepted. A gadget can be any of
              the following items: Digital cameras, e-readers, laptops
              (including MacBook’s), mobile phones, PDA’s, portable gaming
              consoles, satellite navigation devices, smart phones (including
              iPhones), tablets/phablets (including iPads) and wearable
              technology (such as a smart watches or health and fitness
              trackers). Such items must have been:
            </Text>
            <Text style={styles.sectionTitle} />
            <Text style={styles.bodyText}>
              - purchased as new in the United Kingdom.
            </Text>
            <Text style={styles.bodyText}>
              - purchased as refurbished in the United Kingdom direct from the
              manufacturer or network provider.
            </Text>
            <Text style={styles.bodyText}>
              - obtained from our claims administrator.
            </Text>
            <Text style={styles.bodyText}>
              - The gadget must be in good condition and full working order at
              the time of initial inception of this policy.
            </Text>
            <Text style={styles.sectionTitle}>
              Am I eligible for the ZugarZnap Gadget insurance?
            </Text>
            <Text style={styles.bodyText}>
              To be eligible for this policy, the following statements must be
              true to the best of your knowledge:
            </Text>
            <Text style={styles.bodyText}>
              - You have a current supercard membership.
            </Text>
            <Text style={styles.bodyText}>
              - You are a UK (England, Scotland, Wales, Northern Ireland, the
              Channel Islands and the Isle of Man) resident.
            </Text>
            <Text style={styles.bodyText}>You are aged 18 or over.</Text>
            <Text style={styles.bodyText}>
              You or an immediate family member own your gadget(s) that are to
              be insured.
            </Text>
            <Text style={styles.bodyText}>
              Your gadget(s) are in good condition and full working order at the
              time this policy was first incepted.
            </Text>
            <Text style={styles.bodyText}>
              You have not had any insurance refused, cancelled or declared null
              or void.
            </Text>
            <Text style={styles.bodyText}>
              You or an immediate family member have not been convicted of any
              criminal offence (other than motoring convictions) or have any
              prosecution or police enquiry pending (any convictions spent under
              the Rehabilitation of Offenders Act 1974 do not need to be
              disclosed).
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
    fontSize: 16,
    fontFamily: "DIN-Regular",
    fontWeight: "400",
    color: "black",
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

export default FAQScreen;
