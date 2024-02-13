import React, { useState } from "react";
import { TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CustTextInputPassword({ text, password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      style={{
        marginHorizontal: "5%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderColor: "grey",
          borderWidth: 3,
          marginTop: "5%",
          padding: "4%",
          borderRadius: 18,
        }}
      >
        <TextInput
          // Set secureTextEntry prop to hide
          //password when showPassword is false
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={{ flex: 10, fontSize: 16, fontWeight: "bold" }}
          placeholder="Password"
        />
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="grey"
          style={{
            flex: 1,
            textAlign: "right",
            marginLeft: 6,
            marginVertical: -2,
          }}
          onPress={toggleShowPassword}
        />
      </View>
    </View>
  );
}
