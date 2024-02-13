import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function ButtonSmall({ text, onPress }) {
  return (
    <>
      <View style={{ flexDirection: "row", marginHorizontal: "5%" }}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingRight: "3%",
            marginTop: "5%",
            backgroundColor: "white",
          }}
          onPress={onPress}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "right",
              color: "grey",
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
