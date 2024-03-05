import React, { useState } from "react";
// Components
import { View, Text, TouchableOpacity } from "react-native";
import HeadText from "../components/text/HeadText";
import CustTextInput from "../components/input/CustTextInput";
import CustTextInputPassword from "../components/input/CustTextInputPassword";
import ButtonSmall from "../components/buttons/ButtonSmall";
import Button from "../components/buttons/Button";
import { registerClimber } from "../Controller/registryHandler";
import { Climber } from "../Controller/Procedures";
import CustTextInputEmail from "../components/input/CustTextInputEmail";
import styles from "../components/styles/allStyles";
// -----------------------------------------------------------

export default function RegistrationScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleRegistration = () => {
    registerClimber(Climber.register_climber.call, [user, password, email])
      .then((res) => {
        if (res.status === 201 || res.status === 409) {
          navigation.replace("DashboardTabs");
        } else if (res.status === 400) {
          alert("Registration Error: " + JSON.stringify(res.data));
        } else if (res.status === 403) {
          alert("Wrong user credentials: " + JSON.stringify(res.data));
        } else {
          alert("An unknown Error occured. Please try again later. ");
        }
      })
      .catch((err) => {
        console.log("Error during registration: ", err);
        alert("Registrationmfailed! Try again later. ");
      });
  };

  return (
    <>
      <HeadText
        content={
          selectedButton === 1
            ? "Let's go and grab the summit!"
            : "Unlock new heights for climbers!"
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
      <CustTextInput text={"Username"} user={user} setUser={setUser} />
      <CustTextInputEmail
        text={"E-Mail"}
        keyboardType={"email-address"}
        email={email}
        setEmail={setEmail}
      />
      <CustTextInputPassword
        secureTextEntry={true}
        text="Password"
        password={password}
        setPassword={setPassword}
      />

      <Button text="Sign in" onPress={handleRegistration} />
      <View style={{ marginBottom: 20 }} />
      <ButtonSmall
        text="Already signed in?"
        onPress={() => navigation.replace("Login")}
      />
    </>
  );
}
