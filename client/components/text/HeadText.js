import React from "react";
// Components
import { Text, View } from "react-native";
// Styles
import styles from "../styles/allStyles";

// -------------------------------------------------

// the TextBox at the Top of a Screen
export default function HeadText({ content, additionalStyle }) {
  return (
    <>
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: additionalStyle === "" ? 4 : 20 }}>
            <Text style={[styles.h1, additionalStyle]}>{content}</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
      </View>
    </>
  );
}
