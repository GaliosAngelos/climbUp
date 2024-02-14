import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ButtonSmall({ text, onPress }) {
  return (
    <>
      <View style={{ flexDirection: "row"}}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.buttonsmall} onPress={onPress}>
          <Text style={styles.buttonsmalltext}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
