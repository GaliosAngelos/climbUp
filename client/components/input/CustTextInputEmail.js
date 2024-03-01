import React, { useState } from "react";
// Components
import { TextInput, View } from "react-native";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
// Styles
import styles from "../styles/allStyles";

// ------------------------------------------------------------------

// same like the CustTextInput especially for passwords
export default function CustTextInputEmail({ text, keyboardType, email, setEmail}) {

  return (
    <View style={styles.textinput}>
      <TextInput
        style={styles.text}
        onChangeText={setEmail}
        value={email}
        placeholder={text}
        keyboardType={keyboardType}
        autoCapitalize='none'
      />
    </View>
  );
}