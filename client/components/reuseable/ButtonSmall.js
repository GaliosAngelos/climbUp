import React from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "../../components/reuseable/allStyles.js";

// ------------------------------------------------------------------

// small Buttons that will appear directly on the main canvas, for actions with a lower frequency than the large Buttons (for side-actions)
export default function ButtonSmall({ text, onPress }) {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.buttonsmall} onPress={onPress}>
          <Text style={styles.buttonsmalltext}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
