import React from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ClimbingHallBox({ key, name, street, city }) {
  return (
    <TouchableWithoutFeedback key={key} style={styles.borderBox}>
      <Text style={styles.h3}>{name}</Text>
      <Text style={styles.text}>{street}</Text>
      <Text style={styles.text}>{city}</Text>
    </TouchableWithoutFeedback>
  );
}
