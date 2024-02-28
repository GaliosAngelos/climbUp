import React from "react";
// Components
import { TouchableOpacity, Text } from "react-native";

// ---------------------------------------------------------------

// medium sized Buttons that will appear in RouteBox etc.
export default function ButtonMedium({ text, onPress, color, selected }) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: selected ? "#484848" : "transparent",
          padding: 5,
          marginHorizontal: 10,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: selected ? color : "black",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: "2%",
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
}
