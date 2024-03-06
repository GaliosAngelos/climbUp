import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/allStyles";

// Define the ButtonDeleteUpdate component that accepts 'onPress' and 'abfrage' (a boolean to determine the button's function) as props
export default function ButtonDeleteUpdate({ onPress, abfrage }) {
  let name, iconName, color;

  // Conditional logic to determine the button's appearance and function based on the 'abfrage' prop
  if (abfrage === true) {
    name = "Delete";
    iconName = "trash";
    color = "#F5BBBA";
  } else {
    name = "Update";
    iconName = "refresh";
    color = "#8FD78F";
  }
  return (
    <TouchableOpacity
      style={[
        {
          paddingVertical: 9,
          paddingHorizontal: 20,
          marginVertical: 10,
          borderRadius: 12,
          justifyContent: "center",
          flex: 1,
          marginHorizontal: 5,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: color,
        },
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonlargetext}>{name}</Text>
      <Ionicons name={iconName} size={30} color="black" />
    </TouchableOpacity>
  );
}
