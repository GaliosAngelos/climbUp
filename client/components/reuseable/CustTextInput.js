import React from "react";
import { TextInput, View } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function CustTextInput({ text, keyboardType, user, setUser }) {
  return (
    <>
      <View style={styles.textinput}>
        <TextInput 
          style={styles.text}
          onChangeText={setUser}
          value={user}
          placeholder={text}
          keyboardType={keyboardType}
        />
      </View>
    </>
  );
}
