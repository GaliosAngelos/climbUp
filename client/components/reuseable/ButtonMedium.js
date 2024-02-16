import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ButtonMedium({ text, onPress, col }) {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }} />
        <View style={styles.buttonmedium}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonmediumtext}>{text}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </>
  );
}
