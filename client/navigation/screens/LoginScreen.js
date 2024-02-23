import React, { useState } from "react";
import { View } from "react-native";
// Components
import HeadText from "../../components/reuseable/HeadText";
import CustTextInput from "../../components/reuseable/CustTextInput";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import ButtonSmall from "../../components/reuseable/ButtonSmall";
import Button from "../../components/reuseable/Button";
import { sendLogin } from "../../components/reuseable/loginRequest";
// --------------------------------------------------------------------

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("dbadmin");
  const [password, setPassword] = useState("dbadmin");

  // Request on backend -> Login
  const handleLogin = () => {
    sendLogin({"user": user, "password": password})
      .then((response) => {
        // Überprüfen Sie den Status der Antwort
        if (response.status === 200) {
          // Erfolgreiche Authentifizierung
          // console.log("Login erfolgreich", response.data);
          navigation.replace("DashboardTabs");
        } else if (response.status === 400) {
          // Behandlung von spezifischen Fehlermeldungen vom Server
          alert("Anmeldefehler: " + JSON.stringify(response.data));
        } else {
          // Behandlung anderer Fehler
          alert("Ein unbekannter Fehler ist aufgetreten.");
        }
      })
      .catch((error) => {
        console.log("Fehler beim Login-Versuch", error);
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
