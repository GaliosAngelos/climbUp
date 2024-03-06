import React from "react";
import { View, TextInput } from "react-native";
import styles from "../styles/allStyles";

// Textinput to filter
export default function CustomTextInputFilter({ label, value, onChange }) {
  return (
    <>
      <View style={styles.textinput}>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder={label}
          autoCapitalize="none"
        />
      </View>
    </>
  );
}
