import React from "react";
// Components
import { TouchableOpacity, Text } from "react-native";

// ---------------------------------------------------------------

// medium sized Buttons that will appear in RouteBox etc.
export default function ButtonCommit({ onPress, selected, hasSelection }) {
  // Need to change the button to disabled
  const isDisabled = !hasSelection;

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDisabled ? "transparent" : "#ABABAB",
          padding: 5,
          marginHorizontal: 10,
          borderRadius: 12,
          opacity: isDisabled ? 0.3 : 1,
        }}
        disabled={isDisabled}
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
          Commit
        </Text>
      </TouchableOpacity>
    </>
  );
}
