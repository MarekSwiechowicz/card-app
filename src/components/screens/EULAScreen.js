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

class EULAScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLockMode: "locked-closed",
    title: "EULA",
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
            title="END-USER LICENSE AGREEMENT (&quot;AGREEMENT&quot;)"
            titleStyle={styles.title}
            containerStyle={styles.card}
            dividerStyle={styles.divider}
          >
            <Text style={styles.bodyText}>Last updated: May 26, 2016</Text>
            <Text style={styles.bodyText}>
              Please read this End-User License Agreement ("Agreement")
              carefully before clicking the "I Agree" button, downloading or
              using Supercard ("Application").
            </Text>
            <Text style={styles.bodyText}>
              By clicking the "I Agree" button, downloading or using the
              Application, you are agreeing to be bound by the terms and
              conditions of this Agreement.
            </Text>
            <Text style={styles.bodyText}>
              This Agreement is a legal agreement between you (either an
              individual or a single entity) and TLC Marketing Worldwide B2C
              Limted UK and it governs your use of the Application made
              available to you by TLC Marketing Worldwide B2C Limted UK.
            </Text>
            <Text style={styles.bodyText}>
              If you do not agree to the terms of this Agreement, do not click
              on the "I Agree" button and do not download or use the
              Application.
            </Text>
            <Text style={styles.bodyText}>
              The Application is licensed, not sold, to you by TLC Marketing
              Worldwide B2C Limted UK for use strictly in accordance with the
              terms of this Agreement.
            </Text>
            <Text style={styles.sectionTitle}>License</Text>
            <Text style={styles.bodyText}>
              TLC Marketing Worldwide B2C Limted UK grants you a revocable,
              non-exclusive, non-transferable, limited license to download,
              install and use the Application solely for your personal,
              non-commercial purposes strictly in accordance with the terms of
              this Agreement.
            </Text>
            <Text style={styles.sectionTitle}>Restrictions</Text>
            <Text style={styles.bodyText}>
              You agree not to, and you will not permit others to:license, sell,
              rent, lease, assign, distribute, transmit, host, outsource,
              disclose or otherwise commercially exploit the Application or make
              the Application available to any third party.copy or use the
              Application for any purpose other than as permitted under the
              above section 'License'.modify, make derivative works of,
              disassemble, decrypt, reverse compile or reverse engineer any part
              of the Application.remove, alter or obscure any proprietary notice
              (including any notice of copyright or trademark) of TLC Marketing
              Worldwide B2C Limted UK or its affiliates, partners, suppliers or
              the licensors of the Application.
            </Text>
            <Text style={styles.sectionTitle}>Intellectual Property</Text>
            <Text style={styles.bodyText}>
              The Application, including without limitation all copyrights,
              patents, trademarks, trade secrets and other intellectual property
              rights are, and shall remain, the sole and exclusive property of
              TLC Marketing Worldwide B2C Limted UK.
            </Text>
            <Text style={styles.sectionTitle}>Your Suggestions</Text>
            <Text style={styles.bodyText}>
              Any feedback, comments, ideas, improvements or suggestions
              (collectively, "Suggestions") provided by you to TLC Marketing
              Worldwide B2C Limted UK with respect to the Application shall
              remain the sole and exclusive property of TLC Marketing Worldwide
              B2C Limted UK.
            </Text>
            <Text style={styles.bodyText}>
              TLC Marketing Worldwide B2C Limted UK shall be free to use, copy,
              modify, publish, or redistribute the Suggestions for any purpose
              and in any way without any credit or any compensation to you.
            </Text>
            <Text style={styles.sectionTitle}>
              Modifications to Application
            </Text>
            <Text style={styles.bodyText}>
              TLC Marketing Worldwide B2C Limted UK reserves the right to
              modify, suspend or discontinue, temporarily or permanently, the
              Application or any service to which it connects, with or without
              notice and without liability to you.
            </Text>
            <Text style={styles.sectionTitle}>Updates to Application</Text>
            <Text style={styles.bodyText}>
              TLC Marketing Worldwide B2C Limted UK may from time to time
              provide enhancements or improvements to the features/functionality
              of the Application, which may include patches, bug fixes, updates,
              upgrades and other modifications ("Updates").
            </Text>
            <Text style={styles.bodyText}>
              Updates may modify or delete certain features and/or
              functionalities of the Application. You agree that TLC Marketing
              Worldwide B2C Limted UK has no obligation to (i) provide any
              Updates, or (ii) continue to provide or enable any particular
              features and/or functionalities of the Application to you.
            </Text>
            <Text style={styles.bodyText}>
              You further agree that all Updates will be (i) deemed to
              constitute an integral part of the Application, and (ii) subject
              to the terms and conditions of this Agreement.
            </Text>
            <Text style={styles.sectionTitle}>Third-Party Services</Text>
            <Text style={styles.bodyText}>
              The Application may display, include or make available third-party
              content (including data, information, applications and other
              products services) or provide links to third-party websites or
              services ("Third-Party Services").
            </Text>
            <Text style={styles.bodyText}>
              You acknowledge and agree that TLC Marketing Worldwide B2C Limted
              UK shall not be responsible for any Third-Party Services,
              including their accuracy, completeness, timeliness, validity,
              copyright compliance, legality, decency, quality or any other
              aspect thereof. TLC Marketing Worldwide B2C Limted UK does not
              assume and shall not have any liability or responsibility to you
              or any other person or entity for any Third-Party Services.
            </Text>
            <Text style={styles.bodyText}>
              Third-Party Services and links thereto are provided solely as a
              convenience to you and you access and use them entirely at your
              own risk and subject to such third parties' terms and conditions.
            </Text>
            <Text style={styles.sectionTitle}>Term and Termination</Text>
            <Text style={styles.bodyText}>
              This Agreement shall remain in effect until terminated by you or
              TLC Marketing Worldwide B2C Limted UK.
            </Text>
            <Text style={styles.bodyText}>
              TLC Marketing Worldwide B2C Limted UK may, in its sole discretion,
              at any time and for any or no reason, suspend or terminate this
              Agreement with or without prior notice.
            </Text>
            <Text style={styles.bodyText}>
              This Agreement will terminate immediately, without prior notice
              from TLC Marketing Worldwide B2C Limted UK, in the event that you
              fail to comply with any provision of this Agreement. You may also
              terminate this Agreement by deleting the Application and all
              copies thereof from your mobile device or from your computer.
            </Text>
            <Text style={styles.bodyText}>
              Upon termination of this Agreement, you shall cease all use of the
              Application and delete all copies of the Application from your
              mobile device or from your compute
            </Text>
            <Text style={styles.bodyText}>
              Termination of this Agreement will not limit any of TLC Marketing
              Worldwide B2C Limted UK's rights or remedies at law or in equity
              in case of breach by you (during the term of this Agreement) of
              any of your obligations under the present Agreement.
            </Text>
            <Text style={styles.sectionTitle}>Indemnification</Text>
            <Text style={styles.bodyText}>
              You agree to indemnify and hold TLC Marketing Worldwide B2C Limted
              UK and its parents, subsidiaries, affiliates, officers, employees,
              agents, partners and licensors (if any) harmless from any claim or
              demand, including reasonable attorneys' fees, due to or arising
              out of your: (a) use of the Application; (b) violation of this
              Agreement or any law or regulation; or (c) violation of any right
              of a third party.
            </Text>
            <Text style={styles.sectionTitle}>No Warranties</Text>
            <Text style={styles.bodyText}>
              The Application is provided to you "AS IS" and "AS AVAILABLE" and
              with all faults and defects without warranty of any kind. To the
              maximum extent permitted under applicable law, TLC Marketing
              Worldwide B2C Limted UK, on its own behalf and on behalf of its
              affiliates and its and their respective licensors and service
              providers, expressly disclaims all warranties, whether express,
              implied, statutory or otherwise, with respect to the Application,
              including all implied warranties of merchantability, fitness for a
              particular purpose, title and non-infringement, and warranties
              that may arise out of course of dealing, course of performance,
              usage or trade practice. Without limitation to the foregoing, TLC
              Marketing Worldwide B2C Limted UK provides no warranty or
              undertaking, and makes no representation of any kind that the
              Application will meet your requirements, achieve any intended
              results, be compatible or work with any other software,
              applications, systems or services, operate without interruption,
              meet any performance or reliability standards or be error free or
              that any errors or defects can or will be corrected.
            </Text>
            <Text style={styles.bodyText}>
              Without limiting the foregoing, neither TLC Marketing Worldwide
              B2C Limted UK nor any TLC Marketing Worldwide B2C Limted UK's
              provider makes any representation or warranty of any kind, express
              or implied: (i) as to the operation or availability of the
              Application, or the information, content, and materials or
              products included thereon; (ii) that the Application will be
              uninterrupted or error-free; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Application; or (iv) that the Application, its
              servers, the content, or e-mails sent from or on behalf of TLC
              Marketing Worldwide B2C Limted UK are free of viruses, scripts,
              trojan horses, worms, malware, timebombs or other harmful
              components.
            </Text>
            <Text style={styles.bodyText}>
              Some jurisdictions do not allow the exclusion of or limitations on
              implied warranties or the limitations on the applicable statutory
              rights of a consumer, so some or all of the above exclusions and
              limitations may not apply to you.
            </Text>
            <Text style={styles.sectionTitle}>Limitation of Liability</Text>
            <Text style={styles.bodyText}>
              Notwithstanding any damages that you might incur, the entire
              liability of TLC Marketing Worldwide B2C Limted UK and any of its
              suppliers under any provision of this Agreement and your exclusive
              remedy for all of the foregoing shall be limited to the amount
              actually paid by you for the Application.
            </Text>
            <Text style={styles.bodyText}>
              To the maximum extent permitted by applicable law, in no event
              shall TLC Marketing Worldwide B2C Limted UK or its suppliers be
              liable for any special, incidental, indirect, or consequential
              damages whatsoever (including, but not limited to, damages for
              loss of profits, for loss of data or other information, for
              business interruption, for personal injury, for loss of privacy
              arising out of or in any way related to the use of or inability to
              use the Application, third-party software and/or third-party
              hardware used with the Application, or otherwise in connection
              with any provision of this Agreement), even if TLC Marketing
              Worldwide B2C Limted UK or any supplier has been advised of the
              possibility of such damages and even if the remedy fails of its
              essential purpose.
            </Text>
            <Text style={styles.bodyText}>
              Some states/jurisdictions do not allow the exclusion or limitation
              of incidental or consequential damages, so the above limitation or
              exclusion may not apply to you.
            </Text>
            <Text style={styles.sectionTitle}>Severability</Text>
            <Text style={styles.bodyText}>
              If any provision of this Agreement is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law and the remaining provisions will
              continue in full force and effect.
            </Text>
            <Text style={styles.sectionTitle}>Waiver</Text>
            <Text style={styles.bodyText}>
              Except as provided herein, the failure to exercise a right or to
              require performance of an obligation under this Agreement shall
              not effect a party's ability to exercise such right or require
              such performance at any time thereafter nor shall be the waiver of
              a breach constitute waiver of any subsequent breach.
            </Text>
            <Text style={styles.sectionTitle}>
              Amendments to this Agreement
            </Text>
            <Text style={styles.bodyText}>
              TLC Marketing Worldwide B2C Limted UK reserves the right, at its
              sole discretion, to modify or replace this Agreement at any time.
              If a revision is material we will provide at least 30 days' notice
              prior to any new terms taking effect. What constitutes a material
              change will be determined at our sole discretion.
            </Text>
            <Text style={styles.bodyText}>
              By continuing to access or use our Application after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorized to
              use the Application.
            </Text>
            <Text style={styles.sectionTitle}>Governing Law</Text>
            <Text style={styles.bodyText}>
              The laws of United Kingdom, excluding its conflicts of law rules,
              shall govern this Agreement and your use of the Application. Your
              use of the Application may also be subject to other local, state,
              national, or international laws.
            </Text>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <Text style={styles.bodyText}>
              If you have any questions about this Agreement, please contact us.
            </Text>
            <Text style={styles.sectionTitle}>Entire Agreement</Text>
            <Text style={styles.bodyText}>
              The Agreement constitutes the entire agreement between you and TLC
              Marketing Worldwide B2C Limted UK regarding your use of the
              Application and supersedes all prior and contemporaneous written
              or oral agreements between you and TLC Marketing Worldwide B2C
              Limted UK.
            </Text>
            <Text style={styles.bodyText}>
              You may be subject to additional terms and conditions that apply
              when you use or purchase other TLC Marketing Worldwide B2C Limted
              UK's services, which TLC Marketing Worldwide B2C Limted UK will
              provide to you at the time of such use or purchase.
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
    borderColor: "#e41567",
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

export default EULAScreen;
