import React, { useState } from "react";
// Components
import { Text, View } from "react-native";
import HeadText from "../../components/reuseable/HeadText";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import { logout } from "../../components/reuseable/loginLogoutRequest.js";
import Button from "../../components/reuseable/Button";
// Style
import styles from "../../components/reuseable/allStyles.js";

// --------------------------------------------------------------

// Bottom Bar Navigation
const nav = [
  { name: "Profile", toScreen: "Profile" },
  { name: "Support", toScreen: "Support" },
  { name: "Login", toScreen: "Login" },
];

// --------------------------------------------------------------

export default function SettingsScreen({ navigation }) {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <View>
      <HeadText content="Make the change!" />
      <View style={styles.borderBox}>
        <Text style={styles.h3}>Username: auxTeam69</Text>
        <Text style={styles.h3}>Email: 123456@via.dk</Text>
      </View>
      <Text style={styles.h2}>Change your password.</Text>
      <CustTextInputPassword
        secureTextEntry={true}
        text="Actual Password"
        password={actualPassword}
        setPassword={setActualPassword}
      />

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
      <Button
        text="Update Password"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        text="Go to Login Page"
        onPress={() => navigation.navigate("Login")}
      />
<<<<<<< HEAD
      <Button
        text="Logout"
        onPress={() => logout()
          .then((response) => {
            // Überprüfen Sie den Status der Antwort
            if (response.status === 200) {
              console.log(response.data);
              navigation.navigate("Login");
            } else if (response.status === 500) {
              // Behandlung von spezifischen Fehlermeldungen vom Server
              alert("Abmeldefehler: " + JSON.stringify(response.data));
              navigation.navigate("Login");
            } else {
              // Behandlung anderer Fehler
              alert("An unknown error occured");
              navigation.navigate("Login");
            }
          })
          .catch((error) => {
            console.log("Error while logging out", error);
            alert("Logout failed.");
            navigation.navigate("Login");
          })
        }
      />
      <TitelText content="Contact us !" />
=======

      <Text style={styles.h2}>Contact us.</Text>
>>>>>>> origin/nico
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
    </View>
  );
}
