import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Components
import HeadText from "../components/text/HeadText";
import CustTextInput from "../components/input/CustTextInput";
import CustTextInputPassword from "../components/input/CustTextInputPassword";
import ButtonSmall from "../components/buttons/ButtonSmall";
import Button from "../components/buttons/Button";
// Query
import { loginClimber, loginHallowner } from "../Controller/loginHander";
import styles from "../components/styles/allStyles";

// --------------------------------------------------------------------

// Loginscreen for the climber and hallowner for the app
export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleLogin = async () => {
    const loginFunction = selectedButton === 2 ? loginHallowner : loginClimber;

    loginFunction([user, password])
      .then(async (res) => {
        if (res.status === 200 || res.status === 409) {
          await AsyncStorage.setItem(
            "userData",
            JSON.stringify({ user, password })
          );
          const nextScreen =
            selectedButton === 2 ? "HallDashboardTabs" : "ClimberDashboardTabs";
          navigation.replace(nextScreen);
        } else if (res.status === 400) {
          alert("Anmeldefehler: " + JSON.stringify(res.data));
        } else {
          alert("An unknown error has occurred.");
        }
      })
      .catch((err) => {
        console.log("Error during login attempt", err);
        alert("Login attempt failed.");
      });
  };

  return (
    <>
      <HeadText
        content={
          selectedButton === 1
            ? "Welcome back, climber!"
            : "Welcome back, Hallowner"
        }
        additionalStyle={selectedButton === 1 ? "" : { textAlign: "right" }}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.buttonlarge,
              selectedButton === 1 && styles.selectedButton,
              { width: 140 },
            ]}
            onPress={() => handleButtonPress(1)}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === 1 ? { color: "white" } : { color: "black" },
              ]}
            >
              Climber
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.buttonlarge,
              selectedButton === 2 && styles.selectedButton,
              { width: 140 },
            ]}
            onPress={() => handleButtonPress(2)}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === 2 ? { color: "white" } : { color: "black" },
              ]}
            >
              Hallowner
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustTextInput
        text={"Username or E-Mail"}
        keyboardType={"email-address"}
        user={user}
        setUser={setUser}
      />
      <CustTextInputPassword
        secureTextEntry={true}
        text="Password"
        password={password}
        setPassword={setPassword}
      />
      <Button text="Log in" onPress={handleLogin} />
      <View style={{ marginBottom: 20 }} />
      <ButtonSmall
        text="Forgot your password?"
        onPress={() => navigation.replace("ForgotPassword")}
      />
      <ButtonSmall
        text="Not signed in yet?"
        onPress={() => navigation.replace("Registration")}
      />
    </>
  );
}
