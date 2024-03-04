import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [selectedButton, setSelectedButton] = useState(1);

  useEffect(() => {
    if (selectedButton === 1) {
      // Climber
      setUser("adrian");
      setPassword("adrian");
    } else {
      // Hallowner
      setUser("dav_kletterzentrum_augsburg");
      setPassword("1e0a1aed7e");
    }
  }, [selectedButton]);

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  // Request on backend -> Login
  const handleLogin = () => {
    if (selectedButton === 2) {
      loginHallowner([user, password])
        .then((res) => {
          if (res.status === 200 || res.status === 409) {
            navigation.replace("HallDashboardTabs");
          } else if (res.status === 400) {
            alert("Anmeldefehler: " + JSON.stringify(res.data));
          } else {
            alert("Ein unbekannter Fehler ist aufgetreten.");
          }
        })

        .catch((err) => {
          console.log("Fehler beim Login-Versuch", err);
          alert("Login-Versuch fehlgeschlagen.");
        });
    } else {
      loginClimber([user, password])
        .then((res) => {
          if (res.status === 200 || res.status === 409) {
            navigation.replace("ClimberDashboardTabs");
          } else if (res.status === 400) {
            alert("Anmeldefehler: " + JSON.stringify(res.data));
          } else {
            alert("Ein unbekannter Fehler ist aufgetreten.");
          }
        })
        .catch((err) => {
          console.log("Fehler beim Login-Versuch", err);
          alert("Login-Versuch fehlgeschlagen.");
        });
    }
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
      <Button
        text="Log in"
        onPress={handleLogin}
      />
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
