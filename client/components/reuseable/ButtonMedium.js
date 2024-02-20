import React from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "../../components/reuseable/allStyles.js";

// ---------------------------------------------------------------

// medium sized Buttons that will appear in RouteBox etc.
export default function ButtonMedium({ text, onPress }) {
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
