import React, { useState } from "react";
// Components
import { View } from "react-native";
import HeadText from "../../components/reuseable/HeadText";
import CustTextInput from "../../components/reuseable/CustTextInput";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import ButtonSmall from "../../components/reuseable/ButtonSmall";
import Button from "../../components/reuseable/Button";

// -----------------------------------------------------------

export default function RegistrationScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  // Request on backend + send verification to Email
  const handleRegistration = () => {};

  return (
    <>
      <HeadText content="Let's go and grab the summit!" />
      <CustTextInput text={"Username"} user={user} setUser={setUser} />
      <CustTextInput
        text={"E-Mail"}
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

      <Button text="Sign in" onPress={handleRegistration} />
      <View style={{ marginBottom: 20 }} />
      <ButtonSmall
        text="Already signed in?"
        onPress={() => navigation.replace("Login")}
      />
    </>
  );
}
