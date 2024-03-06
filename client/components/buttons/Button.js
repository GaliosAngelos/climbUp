import React from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "../../components/styles/allStyles";

// -----------------------------------------------------------------------

// Define the Button component that accepts 'text' and 'onPress' props
export default function Button({ text, onPress }) {
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.buttonlarge} onPress={onPress}>
          <Text style={styles.buttonlargetext}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
