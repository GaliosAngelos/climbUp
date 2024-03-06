import React, { useState } from "react";
// Components
import { View } from "react-native";
import Button from "../components/buttons/Button";
import HeadText from "../components/text/HeadText";
import CustTextInput from "../components/input/CustTextInput";
import ButtonSmall from "../components/buttons/ButtonSmall";

// -------------------------------------------------------------------

// forgot password screen
export default function ForgotPasswordScreen({ navigation }) {
  const [user, setUser] = useState();
  return (
    <>
      <HeadText content="Forgot password." />
      <View style={{ marginBottom: 50 }} />
      <CustTextInput
        text={"Email"}
        keyboardType={"email-address"}
        user={user}
        setUser={setUser}
      />
      <Button
        text="Commit"
        onPress={() =>
          alert(
            "ForgotPassword function is in progress! (New Password sended to your email) "
          )
        }
      />
      <View style={{ marginBottom: 20 }} />
      <ButtonSmall
        text="Back to login?"
        onPress={() => navigation.replace("Login")}
      />
    </>
  );
}
