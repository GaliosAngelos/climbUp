import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function HeadText({ content }) {
  return (
    <SafeAreaView>
      <Text style={styles.h3}>{content}</Text>
    </SafeAreaView>
  );
}
