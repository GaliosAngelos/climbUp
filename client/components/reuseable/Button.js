import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function Button({ text, onPress }) {
  return (
    <>
      <View style={{ flexDirection: "row"}}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.buttonlarge} onPress={onPress}>
          <Text style={styles.buttonlargetext}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
