import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ButtonMedium({ text, onPress }) {
  return (
    <>
        <TouchableOpacity style={styles.buttonmedium} onPress={onPress}>
          <Text style={styles.buttonmediumtext}>{text}</Text>
        </TouchableOpacity>
    </>
  );
}
