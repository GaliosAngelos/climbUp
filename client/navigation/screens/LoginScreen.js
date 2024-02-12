// Login.js
import React from "react";
import { View, Button } from "react-native";

const LoginScreen = ({ onLogin }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Anmelden" onPress={onLogin} />
    </View>
  );
};

export default LoginScreen;
