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

class TermsAndConditionsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Terms and Conditions",
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
            title="THE LEGAL STUFF"
            titleStyle={styles.title}
            containerStyle={styles.card}
            dividerStyle={styles.divider}
          >
            <Text style={styles.sectionTitle}>
              SUPERCARD TERMS OF MEMBERSHIP AND SUPERCARD MEMBERSHIP AGREEMENT.
            </Text>
            <Text style={styles.bodyText}>
              The following is the Supercard Membership Agreement between
              Supercard Worldwide Ltd ("we and us") and the person whose name
              appears on the Supercard and welcome email/letter ("you").
            </Text>
            <Text style={styles.bodyText}>
              YOU ARE URGED TO READ THE TERMS OF SUPERCARD MEMBERSHIP AND
              MEMBERSHIP AGREEMENT CAREFULLY AND TO COMMUNICATE ANY QUESTIONS
              THAT MAY ARISE REGARDING YOUR SUPERCARD MEMBERSHIP TO OUR
              SUPERCARD CONCIERGE TEAM ON 0330 124 1223, 9.00am to 5.30pm Monday
              to Friday.
            </Text>
            <Text style={styles.bodyText}>
              Supercard is available to Residents of the UK aged 18 or over and
              who are legally able of entering a binding contract. Supercard
              Membership is void where prohibited by law.
            </Text>
            <Text style={styles.sectionTitle}>
              1. Supercard Membership Benefits
            </Text>
            <Text style={styles.bodyText}>
              As a Supercard Member, you are entitled to Benefits and/or other
              Discounts on certain products and services offered by
              participating vendors ("Benefits") explained on the Supercard
              website and Supercard app.
            </Text>
            <Text style={styles.sectionTitle}>
              2. Supercard Monthly Membership Term
            </Text>
            <Text style={styles.bodyText}>
              If you are on a Monthly billing Membership, your Supercard
              Membership is effective for one month commencing on the date as
              stated in your Welcome Email and will be automatically renewed
              each month on the anniversary of your joining. ​ Your membership
              is active immediately upon successful registration.
            </Text>
            <Text style={styles.sectionTitle}>
              3. Supercard Annual Membership Term
            </Text>
            <Text style={styles.bodyText}>
              If you are on an Annual billing Membership, your Supercard
              Membership is effective for 12 months commencing on the date as
              stated in your Welcome Email and will be automatically renewed
              each month on the anniversary of your joining.
            </Text>
            <Text style={styles.sectionTitle}>
              4. Renewal of Supercard Membership
            </Text>
            <Text style={styles.bodyText}>
              Unless you notify us that you wish to terminate this agreement and
              cancel your Supercard Membership by following the instructions
              below, for Monthly Members, your Supercard Membership will be
              renewed automatically on the monthly anniversary and on each month
              anniversary thereafter or for Annual Members on the annual
              anniversary thereafter.
            </Text>
            <Text style={styles.sectionTitle}>5. Zugarznap Card</Text>
            <Text style={styles.bodyText}>
              If you have a Zugarznap card, you are entitled to your Membership
              Benefits for 12 months. Full details of the Benefits and how to
              access are on the website. For any queries, please call our
              Concierge Team on 0330 124 1223.
            </Text>
            <Text style={styles.sectionTitle}>
              6. Payment of Membership Fee
            </Text>
            <Text style={styles.bodyText}>
              The payment of your Membership Fee is made automatically by a
              direct charge to the billing source authorised by you, when you
              agreed to take the preview of Supercard. If we are unable to bill
              your specified billing source, you agree to provide an alternative
              billing source. If you fail to pay your Supercard Membership fee,
              either through the authorised billing source, or any alternative
              means within one month of the fee being due, then we shall have
              the right to terminate your Supercard Membership.
            </Text>
            <Text style={styles.sectionTitle}>7. Full Member</Text>
            <Text style={styles.bodyText}>
              A 'full member' is defined, as a Member who is past the preview
              period, has not cancelled their Membership and who is up to date
              with payment for their Supercard Membership.
            </Text>
            <Text style={styles.sectionTitle}>8. Unlocking of rewards</Text>
            <Text style={styles.bodyText}>
              When your Supercard preview begins, you will receive a Welcome
              Email which activates your preview Membership and you will be
              entitled to the "unlocked" Membership Benefits for the remaining
              Membership term from the date of sale. We reserve the right to
              increase or decrease the monthly fee for each renewal term
              effective upon renewal of your Supercard Membership, but will
              notify you of any changes.
            </Text>
            <Text style={styles.sectionTitle}>
              9. Use of Supercard Membership
            </Text>
            <Text style={styles.bodyText}>
              You will promptly notify us if you become aware of any
              unauthorised use of your Supercard Membership Benefits, or if your
              Supercard is lost or stolen.
            </Text>
            <Text style={styles.sectionTitle}>10. Disclaimer of Liability</Text>
            <Text style={styles.bodyText}>
              You agree that we are not responsible or liable for providing and
              we do not provide of the Benefits; these are solely provided by
              participating vendors and, if you have any claims relating to any
              of these Benefits, you will claim directly against the vendor
              providing the Benefit. We make or give no warranties or
              representations, express or imply whether as to satisfactory
              quality or fitness for a particular purpose or otherwise, with
              respect to any of the goods purchased from or services provided by
              any of the participating vendors or related information provided
              by them to you. Under no circumstances shall our liability exceed
              your current monthly Supercard Membership fee and under no
              circumstances shall we be liable for your incidental or
              consequential damages. We reserve the right to eliminate, add,
              change and substitute Benefits and participating vendors without
              notice to you. We assume no responsibility for the payment of or
              contribution to VAT or similar tax, which taxing authorities may
              impose and such taxes, to the extent imposed, shall remain your
              sole responsibility or that of the vendor of the Benefits, as the
              case may be. THIS DISCLAIMER DOES NOT AFFECT YOUR STATUTORY
              RIGHTS.
            </Text>
            <Text style={styles.sectionTitle}>
              11. Terms and Conditions of Benefits
            </Text>
            <Text style={styles.bodyText}>
              Full terms and conditions relating to each benefit is shown on the
              Supercard website and Supercard app. We urge you to read these and
              if you have any questions, to call the Supercard Concierge Team on
              0330 124 1223.
            </Text>
            <Text style={styles.sectionTitle}>12. Entire Agreement</Text>
            <Text style={styles.bodyText}>
              This Agreement contains all of the Terms of Supercard Membership
              and warranties, representations, terms, conditions, inducements,
              promises or agreements concerning the Supercard Membership and
              unless expressly included in this Agreement they shall not form
              part of this Agreement or have any force or effect. If any of the
              terms of this Agreement shall become invalid or unenforceable, the
              remaining terms shall not be affected.
            </Text>
            <Text style={styles.sectionTitle}>13. Governing Law</Text>
            <Text style={styles.bodyText}>
              This Agreement and the Terms of Supercard Membership shall be
              governed and construed in accordance with English law.
            </Text>
            <Text style={styles.sectionTitle}>14. Data Protection</Text>
            <Text style={styles.bodyText}>
              {" "}
              Your personal details will be held by us and used by us for
              Supercard Membership administration and marketing purposes. By
              becoming a Supercard Member you expressly consent to this. We will
              only disclose your details to any people involved with the
              processing of the Supercard Membership services. We shall require
              the recipients of your information to keep it confidential at all
              times and not to disclose to any unauthorised parties.
            </Text>
            <Text style={styles.sectionTitle}>
              15. Termination of Supercard Membership during the Preview period
            </Text>
            <Text style={styles.bodyText}>
              You may terminate your Supercard Membership at any time during
              your preview period by calling the Supercard Concierge Team on
              0330 124 1223 who will provide you with your cancellation number
              as proof of cancellation. You will also be requested to return, by
              post, your Supercard together with your membership number. On
              receipt of receiving the returned Supercard, we will cancel your
              membership. During that period and we will not charge the monthly
              fee to your credit or debit card. Please allow 1 working day (on
              receipt of receiving your returned Supercard) for any
              cancellations to be processed and ongoing monthly payments to be
              cancelled. You are not entitled to a refund on any preview or
              postage and packaging charges. Address to return your Supercard
              to: Supercard Worldwide Limited, c/o TLC Marketing, Cambrian
              House, Cambrian Place, Swansea, SA1 1RH.
            </Text>
            <Text style={styles.sectionTitle}>
              16. Termination of the Supercard Membership after the Preview
              Period
            </Text>
            <Text style={styles.bodyText}>
              You may terminate your Supercard Membership after the preview
              period by calling the Supercard Concierge Team on 0330 124 1223
              who will provide you with your cancellation number as proof of
              cancellation. You will also be requested to return, by post, your
              Supercard together with your membership number. On receipt of
              receiving the returned Supercard, we will cancel your membership.
              Upon cancellation you will no longer have access to the Supercard
              website and Super App and benefits. No further monthly membership
              payments will be taken. The Fee for the cancellation month will
              not be refunded and you are not entitled to a refund for previous
              months’ Membership fees. Please allow 1 working day (on receipt of
              receiving your returned Supercard) for any cancellations to be
              processed and ongoing monthly payments to be cancelled. Please
              note, hotel bookings cannot be made or redeemed after you have
              cancelled your Membership as you must be an ‘active’ members on
              the day of arrival at the hotel. Address to return your Supercard
              to: Supercard Worldwide Limited, c/o TLC Marketing, Cambrian
              House, Cambrian Place, Swansea, SA1 1RH.
            </Text>
            <Text style={styles.sectionTitle}>17. Reservation of rights</Text>
            <Text style={styles.bodyText}>
              {" "}
              We reserve the right to eliminate, add, change and substitute
              benefits and vendors without notice. We further reserve the right
              to change the terms and conditions of this agreement and any
              Supercard Membership policies at any time without prior notice.
              Refund Policy Supercard will allow a customer to cancel during
              their preview and no further payments will be taken. The p&p
              charge is non-refundable. To cancel Members must call Supercard on
              0330 124 1223.
            </Text>
            <Text style={styles.sectionTitle}>
              19. Members registered via eBay UK
            </Text>
            <Text style={styles.bodyText}>
              In order to claim your cashback, post a copy of your eBay UK order
              to the address below within 30 days of your order. We will send a
              cheque to you within 6 weeks of receiving the copy of your
              purchase. You need to be an active Supercard member at time of
              sending your cheque. Address: Supercard, TLC Marketing Worldwide
              B2C, Cambrian House, Cambrian Place, Swansea, SA1 1RH.
            </Text>
            <Text style={styles.sectionTitle}>
              20. Members registered via Virgin Wines
            </Text>
            <Text style={styles.bodyText}>
              In order to claim your cashback, post a copy of your Virgin Wines
              order confirmation email to the address below within 30 days of
              your order. We will send a cheque to you within 6 weeks of
              receiving the copy of your purchase. You need to be an active
              Supercard member at time of sending your cheque. Address:
              Supercard, TLC Marketing Worldwide B2C, Cambrian House, Cambrian
              Place, Swansea, SA1 1RH.
            </Text>
            <Text style={styles.sectionTitle}>
              21. Members registered via www.e-careers.co.uk
            </Text>
            <Text style={styles.bodyText}>
              In order to claim your cashback, post a copy of your e-careers
              order confirmation email to the address below within 30 days of
              your order. We will send a cheque to you within 6 weeks of
              receiving the copy of your purchase. You need to be an active
              Supercard member at time of sending your cheque. Address:
              Supercard Worldwide Ltd, Cambrian House, Cambrian Place, Swansea,
              SA1 1RH.
            </Text>
            <Text style={styles.sectionTitle}>
              22. Supercard Complaints Procedure
            </Text>
            <Text style={styles.bodyText}>
              Click here to download a copy of our complaints procedure.
            </Text>
            <Text style={styles.sectionTitle}>
              23. ZugarZnap Gadget Insurance
            </Text>
            <Text style={styles.bodyText}>
              We act as an introducer to ZugarZnap Group Ltd (ZugarZnap) and pay
              any insurance premium required on your behalf. We and ZugarZnap
              are appointed representatives of Oddie Dalton & Co Ltd. Oddie
              Dalton & Co Ltd is authorised and regulated by the Financial
              Conduct Authority (FCA). Registered number 306267. You can check
              this on the Financial Services Register by visiting
              www.fsa.gov.uk/register or by contacting the FCA on 0800 111 6768.
              Oddie Dalton & Co Ltd are registered in England number 01090813
              and their registered office is 124 Melton Road, West Bridgford,
              Nottingham, NG2 6EP. The Insurance is underwritten by Great
              American International Insurance DAC and administered by
              ZugarZnap. ZugarZnap will use your personal details for the
              purpose of administering this insurance. Please see ZugarZnap’s
              Privacy Policy at zugarznap.com/gadget-cover/terms for further
              details. ZugarZnap will email you your insurance certificate
              within 5 working days. We reserve the right to withdraw this
              product at any time which is subject to availability. There is no
              cash alternative and it is non-transferable.
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

export default TermsAndConditionsScreen;
