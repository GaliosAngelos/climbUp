import React, { useState } from "react";
import { Text, View } from "react-native";
import HeadText from "../../components/reuseable/HeadText";
import TitelText from "../../components/reuseable/TitelText";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import Button from "../../components/reuseable/Button";
import styles from "../../components/reuseable/allStyles.js";

const nav = [
  { name: "Profile", toScreen: "Profile" },
  { name: "Support", toScreen: "Support" },
  { name: "Login", toScreen: "Login" },
];

export default function SettingsScreen({ navigation }) {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <View>
      <HeadText content="This is your data." />
      <Text style={styles.h3}>
        Username: 'USERNAME'
      </Text>
      <Text style={styles.h3}>
        Email: 'email@probe.de'
      </Text>
      <TitelText content="Change your Passwort" />
      <CustTextInputPassword
        secureTextEntry={true}
        text="Actual Password"
        password={actualPassword}
        setPassword={setActualPassword}
      />
      {actualPassword ? (
        <>
          <CustTextInputPassword
            secureTextEntry={true}
            text="New Password"
            // Assuming you have state hooks for these as well
            // password={newPassword}
            // setPassword={setNewPassword}
          />
          <CustTextInputPassword
            secureTextEntry={true}
            text="Confirm New Password"
            // Assuming you have state hooks for these as well
            // password={confirmNewPassword}
            // setPassword={setConfirmNewPassword}
          />
        </>
      ) : null}
      <Button
        text="Update Password"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        text="Go to Login Page"
        onPress={() => navigation.navigate("Login")}
      />
      <TitelText content="Contact us !" />
      <Text style={{ color: "#007bff", fontSize: 16 }}>team@climbup.com</Text>
    </View>
  );
}
