import React, { useState } from "react";
// Components
import { Text } from "react-native";
import HeadText from "../../components/reuseable/HeadText";
import CustTextInput from "../../components/reuseable/CustTextInput";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import ButtonSmall from "../../components/reuseable/ButtonSmall";
import Button from "../../components/reuseable/Button";
import styles from "../../components/reuseable/allStyles.js";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [isUser, setIsUser] = useState(false);

  // Momentan nur Abfrage um reinzukommen
  // Später Abfrage von Backend
  const handleLogin = () => {
    if (user === "ag" && password === "123") {
      console.log("user, password :>> ", user, password);
      setIsUser(true);
    } else {
      console.log("Anmeldung nicht geklappt");
      setIsUser(false);
    }
  };

  if (isUser) {
    navigation.replace("Dashboard");
  }

  return (
    <>
      <HeadText content="Welcome back, climber!" />
      <Text>User: ag; Password: 123</Text>
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
