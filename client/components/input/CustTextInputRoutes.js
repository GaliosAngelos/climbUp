import React from "react";
import { TextInput, View } from "react-native";
import styles from "../styles/allStyles";

export default function CustTextInputRoutes({ placeholder, keyboardType, value, setValue }) {
  return (
    <View style={styles.textinput}>
      <TextInput
        style={styles.text}
        onChangeText={setValue} // Geändert von setEmail zu setValue
        value={value} // Geändert von email zu value
        placeholder={placeholder} // Geändert von text zu placeholder für bessere Klarheit
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
}
