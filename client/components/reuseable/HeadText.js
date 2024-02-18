import React from "react";
// Components
import { Text, View } from "react-native";
// Styles
import styles from "../../components/reuseable/allStyles.js";

// -------------------------------------------------

// the TextBox at the Top of a Screen
export default function HeadText({ content }) {
  return (
    <>
      <View style={styles.head}>
        <Text style={styles.h1}>{content}</Text>
      </View>
    </>
  );
}
