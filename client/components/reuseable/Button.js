import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Button({ text }) {
  return (
    <>
      <View style={{ flexDirection: "row", marginHorizontal: "5%" }}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingVertical: "3%",
            marginTop: "5%",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            {text}
          </Text>
          <Ionicons
            name={"arrow-forward-outline"}
            size={24}
            color="grey"
            style={{
              flex: 1,
              textAlign: "right",
              marginLeft: 6,
              marginVertical: -2,
            }}
            onPress={toggleShowPassword}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
