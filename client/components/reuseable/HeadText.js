import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function HeadText({ content }) {
  return (
    
      <SafeAreaView style={styles.head}>
        <Text style={styles.h1}>{content}</Text>
      </SafeAreaView>
    
  );
}
