import React from "react";
import { Text, TouchableOpacity } from "react-native";
// Components
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../styles/allStyles";

// ---------------------------------------------------------------

// medium sized Buttons that will appear in RouteBox etc.
export default function ButtonInsert({ onPress, name }) {
  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.buttonlarge,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={styles.buttonlargetext}>{name}</Text>
        <Ionicons name={"add"} size={30} color={"black"} />
      </TouchableOpacity>
    </>
  );
}
