import React, { useState } from "react";
import { View } from "react-native";
// Components
import HeadText from "../components/text/HeadText";
import CustTextInput from "../components/input/CustTextInput";
import CustTextInputPassword from "../components/input/CustTextInputPassword";
import ButtonSmall from "../components/buttons/ButtonSmall";
import Button from "../components/buttons/Button";
// Query
import { loginClimber } from "../Controller/loginHander";
// --------------------------------------------------------------------

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("dbadmin");
  const [password, setPassword] = useState("dbadmin");

  // Request on backend -> Login
  const handleLogin = () => {
    loginClimber([user, password])
      .then((res) => {
        if (res.status === 200 || res.status === 409) {
          navigation.replace("DashboardTabs");
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
  };

  return (
    <>
      <HeadText content="Welcome back, climber!" />
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
