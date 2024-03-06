import React from "react";
// Components
import { View, Text } from "react-native";
import Button from "../components/buttons/Button";
// -------------------------------------------------------------------

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Login")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        ForgotPasswordScreen
      </Text>
      <Button
        title="Go to Login Page "
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
