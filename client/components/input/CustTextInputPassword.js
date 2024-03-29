import React, { useState } from "react";
// Components
import { TextInput, View } from "react-native";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
// Styles
import styles from "../styles/allStyles";

// ------------------------------------------------------------------

// same like the CustTextInput especially for passwords
export default function CustTextInputPassword({ text, password, setPassword }) {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.textinput, { flexDirection: "row" }]}>
      <TextInput
        // Set secureTextEntry prop to hide
        //password when showPassword is false
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        style={[styles.text, { flex: 10 }]}
        placeholder={text}
        autoCapitalize="none"
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
        onPress={toggleShowPassword} //click on the icon -> hide shows password
      />
    </View>
  );
}
