import React, { useState, useEffect, Alert } from "react";
import { ScrollView, Text, View } from "react-native";
import HeadText from "../components/text/HeadText.js";
import CustTextInputPassword from "../components/input/CustTextInputPassword.js";
import Button from "../components/buttons/Button.js";
import styles from "../components/styles/allStyles.js";
import { logout } from "../Controller/logoutHandler.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { query } from "../Controller/requestHandler.js";
import { Climber } from "../Controller/Procedures.js";

export default function SettingsScreen({ navigation }) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        if (userData) {
          setUser(userData.user);
          setPassword(userData.password);
        }
      } catch (error) {
        console.error("Failed to load user data", error);
        alert("Error", "Failed to load user data.");
      }
    };

    getUserData();
  }, []);

  const updatePassword = async () => {
    if (actualPassword !== password) {
      alert("Error!", "The current password is incorrect.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      alert("Error!", "The new passwords do not match!");
      return;
    }

    query(Climber.change_climber_pw.call, [newPassword])
      .then((res) => {
        alert("Erfolg", "Passwort erfolgreich geändert.");
        setActualPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      })
      .catch((err) => alert("Failed to update password", err));
  };

  return (
    <>
      <HeadText content="Make the change!" />
      <View style={styles.borderBox}>
        <Text style={styles.h3}>Username: {user}</Text>
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
          <Button text="Update Password" onPress={updatePassword} />
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
