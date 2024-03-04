import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import styles from "../styles/allStyles";

export default function CustomFilterInput({ label, value, onChange }) {
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
