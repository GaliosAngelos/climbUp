import React, { useState } from "react";
// Components
import { ScrollView, Text, View } from "react-native";
import HeadText from "../components/text/HeadText.js";
import CustTextInputPassword from "../components/input/CustTextInputPassword.js";
import Button from "../components/buttons/Button.js";
// Style
import styles from "../components/styles/allStyles.js";
import { logout } from "../Controller/logoutHandler.js";

export default function SettingsScreen({ navigation }) {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <>
      <HeadText content="Make the change!" />
      <View style={styles.borderBox}>
        <Text style={styles.h3}>Username: auxTeam69</Text>
        <Text style={styles.h3}>Email: 123456@via.dk</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text style={styles.h2}>Change your password.</Text>
          <CustTextInputPassword
            secureTextEntry={true}
            text="Actual Password"
            password={actualPassword}
            setPassword={setActualPassword}
          />
          <CustTextInputPassword
            secureTextEntry={true}
            text="New Password"
            password={newPassword}
            setPassword={setNewPassword}
          />
          <CustTextInputPassword
            secureTextEntry={true}
            text="Confirm New Password"
            password={confirmNewPassword}
            setPassword={setConfirmNewPassword}
          />
          <Button
            text="Update Password"
            onPress={() => alert("Function is infunction is under development")}
          />
          <Button
            text="Go to Login Page"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            text="Logout"
            onPress={async () => {
              try {
                const response = await logout();
                if (response.status === 200) {
                  console.log(response.data);
                  navigation.navigate("Login");
                } else {
                  alert("An unknown error occurred");
                  navigation.navigate("Login");
                }
              } catch (error) {
                console.log("Error while logging out", error);
                alert("Logout failed.");
                navigation.navigate("Login");
              }
            }}
          />
          <Text style={styles.h2}>Contact us.</Text>
          <Text
            style={[
              styles.h3,
              {
                color: "blue",
                textDecorationLine: "underline",
              },
            ]}
          >
            team@climbup.com
          </Text>
          <View style={{ marginBottom: 130 }} />
        </View>
      </ScrollView>
    </>
  );
}
