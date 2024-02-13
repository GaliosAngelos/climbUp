import React from "react";
import { SafeAreaView, View, Text } from "react-native";

export default function HeadText({ content }) {
  return (
    <>
      <SafeAreaView
        style={{
          height: "25%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            marginHorizontal: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "Rubik-Bold",
            }}
          >
            {content}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
