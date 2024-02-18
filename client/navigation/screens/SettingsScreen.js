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
      <HeadText content="Change your Login." />
      <Text
        style={[
          styles.text,
          {
            fontSize: 16, // Größere Schriftgröße
            fontWeight: "bold", // Dickerer Text
            // backgroundColor: "rgba(255, 255, 255, 0.5)", // Subtiler Hintergrund
            padding: 10, // Etwas Padding für bessere Lesbarkeit
            borderRadius: 5,
          },
        ]}
      >
        Username: 'auxTeam69'
      </Text>
      <Text
        style={[
          styles.text,
          {
            marginBottom: 25,
            fontSize: 16, // Größere Schriftgröße
            fontWeight: "bold", // Dickerer Text
            // backgroundColor: "rgba(255, 255, 255, 0.5)", // Subtiler Hintergrund
            padding: 10, // Etwas Padding für bessere Lesbarkeit
            borderRadius: 5,
          },
        ]}
      >
        Email: '123456@via.dk'
      </Text>
      <TitelText content="Change your Passwort" style={{ marginTop: "5px" }} />
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
      <Text
        style={{
          color: "#007bff",
          fontSize: 16,
          color: "#007bff", // Blaue Textfarbe
          fontSize: 16, // Größere Schriftgröße für Kontaktinformationen
          fontWeight: "bold", // Dickerer Text
          textDecorationLine: "underline",
        }}
      >
        team@climbup.com
      </Text>
    </View>
  );
}
