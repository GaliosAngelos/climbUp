import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

// the TextBox at the Top of a Screen

export default function HeadText({ content, icon }) {

  return (
    <>
    <View style={styles.head}>
    <View style={{flexDirection: "row"}}>
      <View style={{flex: 4}}>
        <Text style={styles.h1}>{content}</Text>
      </View>
      <View style={{flex: 1}}/>
      </View>
      </View>
    </>
  );
}
