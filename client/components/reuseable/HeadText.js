import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./allStyles";

export default function HeadText({ content }) {
  return (
    <>
      <SafeAreaView style={styles.head}>
        <View
          style={{
            marginHorizontal: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {content}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
