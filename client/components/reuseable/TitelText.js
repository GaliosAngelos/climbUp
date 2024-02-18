import React from "react";
// Components
import { Text, View } from "react-native";
// Styles
import styles from "../../components/reuseable/allStyles.js";

// ---------------------------------------------------------------

export default function HeadText({ content }) {
  return (
    <View>
      <Text style={styles.h3}>{content}</Text>
    </View>
  );
}
