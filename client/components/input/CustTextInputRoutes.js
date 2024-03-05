import React from "react";
import { TextInput, View } from "react-native";
import styles from "../styles/allStyles";

export default function CustTextInputRoutes({
  placeholder,
  keyboardType,
  value,
  setValue,
}) {
  return (
    <View style={styles.textinput}>
      <TextInput
        style={styles.text}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </View>
  );
}
