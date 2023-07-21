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

class PrivacyPolicyScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Privacy Policy",
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
            title="PRIVACY POLICY"
            titleStyle={styles.title}
            containerStyle={styles.card}
            dividerStyle={styles.divider}
          >
            <Text style={styles.bodyText}>
              Supercard Worldwide Limited’s ICO registration number is ZA299452
              and our entry on the register can be viewed here.
            </Text>
            <Text style={styles.bodyText}>
              This policy sets out how Supercard uses (and protects) personal
              information – including information from the use of our website
              and participating in rewards by Supercard and our partners.
            </Text>
            <Text style={styles.sectionTitle}>
              Supercard uses and stores personal information for the following
              purposes:
            </Text>
            <Text style={styles.bodyText}>- Providing membership benefits</Text>
            <Text style={styles.bodyText}>
              - Maintaining our own accounts and records
            </Text>
            <Text style={styles.bodyText}>
              - Supporting and managing our staff
            </Text>
            <Text style={styles.bodyText}>
              - Fulfilling our legal obligations and exercising our legal rights
              (including in relation to legal proceedings)
            </Text>
            <Text style={styles.bodyText}>
              If we collect information for one purpose and then intend to use
              it for a different purpose, we will seek your consent to do so
              and/or inform you where necessary or appropriate. Our legal
              grounds for using and storing personal information are explained
              in more detail below. s
            </Text>
            <Text style={styles.sectionTitle}>
              Supercard is the Data Controller for personal information relating
              to its employees and the employees of organisations which we work
              with and people who have:
            </Text>
            <Text style={styles.bodyText}>
              - Agreed to receive marketing information from Supercard
            </Text>
            <Text style={styles.bodyText}>
              - Signed up for Supercard membership
            </Text>
            <Text style={styles.bodyText}>
              - Used Supercard’s website and websites we operate on behalf of
              customers and partners
            </Text>
            <Text style={styles.sectionTitle}>
              Supercard will only disclose personal information organisations
              outside of Supercard:
            </Text>
            <Text style={styles.bodyText}>
              - To carry out our business and to provide a service or carry out
              a contract with you
            </Text>
            <Text style={styles.bodyText}>- Where we have your consent</Text>
            <Text style={styles.bodyText}>
              - Where we have justifiable reason (including where legally
              obliged or authorised to do so or where we are pursuing legitimate
              interests)
            </Text>
            <Text style={styles.bodyText}>
              Where we or the organisations we work with transfer information
              outside of the European Economic Area (“the EEA”) you will enjoy
              the same rights and safeguards as when personal information
              relating to you is used or stored in the EEA.{" "}
            </Text>
            <Text style={styles.sectionTitle}>Email subscribers </Text>
            <Text style={styles.sectionTitle}>Introduction</Text>
            <Text style={styles.bodyText}>
              Supercard will only send direct marketing emails to people who
              have asked to receive them. We are committed to the privacy of
              everyone who asks to receive emails from Supercard. We are also
              committed to transparency about how we use personal information
              and informing people of their rights in relation to the use and
              storage of personal information. More information about your
              rights is available at the end of this policy.
            </Text>
            <Text style={styles.sectionTitle}>
              Types of personal information we use and how we collect it when
              you subscribe to direct marketing emails from Supercard, we
              collect your:
            </Text>
            <Text style={styles.bodyText}>- Full name</Text>
            <Text style={styles.bodyText}>- Email address</Text>
            <Text style={styles.sectionTitle}>
              Why we collect your personal information and how we use it
            </Text>
            <Text style={styles.bodyText}>
              We need your name and email address to enable us to send you email
              updates. If you do not provide this information, Supercard will
              not be able to send you email updates.
            </Text>
            <Text style={styles.bodyText}>
              Supercard will only use and store personal information provided
              when you subscribe for the purposes of email marketing and related
              activities. If we intend or are required to use personal
              information relating to you for further unrelated purposes, we
              will seek your permission or let you know as appropriate.
            </Text>
            <Text style={styles.bodyText}>
              Supercard’s use and storage of your personal information for email
              marketing is based on your consent. Consequently, you will only
              receive emails and information that you have asked to receive. You
              can withdraw your consent or change your email marketing
              preferences at any time, by clicking ‘unsubscribe’ or ‘manage
              preferences’ on any of our emails or by emailing
              hello@super-card.co.uk.
            </Text>
            <Text style={styles.sectionTitle}>
              How long we store your personal data
            </Text>
            <Text style={styles.bodyText}>
              Supercard will store your name and email address for the duration
              of the time that you subscribe to our emails. If you unsubscribe
              from our emails Supercard will store your information for six
              years to ensure that you do no longer receive emails from us.
            </Text>
            <Text style={styles.sectionTitle}>
              Website visitors and people engaging with products, services or
              benefits.
            </Text>
            <Text style={styles.sectionTitle}>Introduction</Text>
            <Text style={styles.bodyText}>
              The use and storage of personal information is necessary for the
              products, services and promotions we provide. We are committed to
              the privacy of every individual who visits our sites or sites we
              operate on behalf of a client, responds to our interactive
              advertisements and other communications or engages with our
              products, services or promotions. We are also committed to
              transparency about how we use personal information and informing
              people of their rights in relation to the use and storage of
              personal information. More information about your rights is
              available at the end of this policy.
            </Text>
            <Text style={styles.sectionTitle}>
              Types of personal information and how we collect it
            </Text>
            <Text style={styles.bodyText}>
              - Information that you provide by registering or by filling in
              forms on this site. This includes information provided at the time
              of subscribing to any services we offer, downloading information
              posted on our site, posting material or requesting further
              services
            </Text>
            <Text style={styles.bodyText}>
              - We may also ask you for information in connection with or
              participation in any promotions or competitions sponsored,
              promoted or offered by us and/or any third party and information
              you provide when giving us feedback or completing profile forms
              and when you report a problem with our site or information we
              learn from your use of our service and your visits to our site
            </Text>
            <Text style={styles.bodyText}>
              - Other information from your interaction with our site, services,
              content and advertising, including computer and connection
              information, statistics on page views, traffic to and from the
              site, ad data, IP address and standard web log information
            </Text>
            <Text style={styles.bodyText}>
              - If you contact us, we may keep a record of that correspondence
            </Text>
            <Text style={styles.bodyText}>
              - Details of your visits to our site including, but not limited
              to, traffic data, location data, weblogs and other communication
              data, whether this is required for our own purposes or otherwise
              and the resources that you access (please see Cookies section
              below for more details)
            </Text>
            <Text style={styles.sectionTitle}>
              Why we collect your personal information and how we use it
            </Text>
            <Text style={styles.sectionTitle}>
              The information we hold about you will be used in different ways.
              Here are the main ones:
            </Text>
            <Text style={styles.bodyText}>
              - To manage and administer your Supercard membership
            </Text>
            <Text style={styles.bodyText}>
              - To carry out our obligations arising from any contracts entered
              into between you and us
            </Text>
            <Text style={styles.sectionTitle}>
              - Offer you a personalised experience and understand your needs
              better
            </Text>
            <Text style={styles.bodyText}>
              - Inform you of events or updates you have asked for or contact
              you if we need to obtain or provide additional information
            </Text>
            <Text style={styles.sectionTitle}>
              Specifically, we use your information we collect in the following
              ways:
            </Text>
            <Text style={styles.sectionTitle}>
              To carry out our business and to provide a service, product or
              promotion or carry out a contract with you
            </Text>
            <Text style={styles.bodyText}>
              - Fulfil product, service or promotion requests
            </Text>
            <Text style={styles.bodyText}>- Process payments</Text>
            <Text style={styles.bodyText}>
              - Provide the best possible customer services and undertake with
              internal administration
            </Text>
            <Text style={styles.bodyText}>
              - Contact you with important information relating to products,
              services or promotions, such as confirming your order, reminding
              you of an upcoming event or letting you know about changes that
              may affect you.
            </Text>
            <Text style={styles.bodyText}>
              - If you do not provide personal information necessary for a
              specific service, product or promotion, we may not be able to
              provide the service or product or you may not be able to take part
              in the promotion.
            </Text>
            <Text style={styles.sectionTitle}>Where we have your consent</Text>
            <Text style={styles.bodyText}>
              - Email you about a specific topics, news and updates you have
              requested to hear more on (please also see Email Subscribers
              section of this policy)
            </Text>
            <Text style={styles.bodyText}>
              - Share your details with other organisations for their purposes.
              These organisations should contact you to let you know how they
              collected your data and to check that you are still happy to hear
              from them. You will always be able to opt out of their
              communications by contacting them directly
            </Text>
            <Text style={styles.bodyText}>
              - Undertake consumer research: we may contact you to ask you to
              participate in consumer research either via an online or telephone
              survey or in person. You are under no obligation to participate in
              research and, should you provide any further information
            </Text>
            <Text style={styles.sectionTitle}>
              Where we have justifiable reason (including legal obligation and
              legitimate interest)
            </Text>
            <Text style={styles.bodyText}>
              - Learn about your interests and preferences
            </Text>
            <Text style={styles.bodyText}>
              Help us target our marketing communications and adverts so that
              they are more relevant to you
            </Text>
            <Text style={styles.bodyText}>
              Measure and understand how people respond to a variety of
              marketing activity so we can ensure our activity is well targeted,
              relevant and effective
            </Text>
            <Text style={styles.bodyText}>
              Analyse and continually improve the services we offer, our website
              and our other products
            </Text>
            <Text style={styles.bodyText}>
              To keep our databases accurate and relevant
            </Text>
            <Text style={styles.bodyText}>
              The use of CCTV recording equipment in and around our premises for
              monitoring and security purposes
            </Text>
            <Text style={styles.bodyText}>Detect and reduce fraud</Text>
            <Text style={styles.sectionTitle}>
              How long we store personal information
            </Text>
            <Text style={styles.bodyText}>
              To help Supercard operate our service and meet our legal
              obligations we will store personal information for six years after
              the date of the product, service or promotion for which the
              information was used or stored.
            </Text>
            <Text style={styles.sectionTitle}>Your rights </Text>
            <Text style={styles.sectionTitle}>
              You have the following rights
            </Text>
            <Text style={styles.bodyText}>
              - The right to be informed personal information relating to you is
              being used or stored (which is what this privacy notice is for)
            </Text>
            <Text style={styles.bodyText}>
              - The right to access personal information relating to you which
              we use or hold
            </Text>
            <Text style={styles.bodyText}>
              - The right to object to direct marketing (by using the
              unsubscribe button)
            </Text>
            <Text style={styles.bodyText}>
              - The right to object to the use of personal information relating
              to you carried out on the ground of legitimate interests
            </Text>
            <Text style={styles.bodyText}>
              - The right to withdraw consent to the use or storage or personal
              information relating to you where the ground for the use or
              storage is your consent. The withdrawal of consent will not affect
              any use or storage of personal information relating to you which
              was based on your consent before it was withdrawn.
            </Text>
            <Text style={styles.bodyText}>
              - The right to erasure of information relating to you that we use
              or hold (only in some circumstances)
            </Text>
            <Text style={styles.bodyText}>- The right of data portability</Text>
            <Text style={styles.bodyText}>
              - The right to have personal information relating to you rectified
              if it is inaccurate
            </Text>
            <Text style={styles.bodyText}>
              - The right to have personal data relating to you restricted or
              blocked from being used or stored
            </Text>
            <Text style={styles.bodyText}>
              Please be aware that these rights are not always absolute and
              there may be some situations in which you cannot exercise them or
              they are not relevant. To help you understand how they work, we
              have provided links to the Information Commissioner’s Office’s
              guidance on each of the rights.
            </Text>
            <Text style={styles.sectionTitle}>Complaints</Text>
            <Text style={styles.bodyText}>
              f you have any cause for concern about Supercard’s handling of
              personal information, please contact us using the details below.
            </Text>
            <Text style={styles.sectionTitle}>
              If we are unable to resolve your concerns about our handling of
              personal information, you have the right to complain to the
              Information Commissioner’s Office.
            </Text>
            <Text style={styles.sectionTitle}>
              Supercard may modify this Privacy statement and you should
              therefore periodically visit this page to be sure that you have
              read and agree with our most current privacy statement. We are not
              responsible for the content of external sites.
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
                  onPress={() => Communications.phonecall("03301241223", true)}
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

export default PrivacyPolicyScreen;
