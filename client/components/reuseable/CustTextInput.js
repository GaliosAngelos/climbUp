import React from "react";
import { TextInput, View } from "react-native";

export default function CustTextInput({ text, keyboardType, user, setUser }) {
  return (
    <>
      <View
        style={{
          marginHorizontal: "5%",
        }}
      >
        <View
          style={{
            borderColor: "grey",
            borderWidth: 3,
            marginTop: "5%",
            padding: "4%",
            borderRadius: 18,
          }}
        >
          <TextInput
            style={{
              fontSize: 16,
              fontWeight: "bold",
            }}
            onChangeText={setUser}
            value={user}
            placeholder={text}
            keyboardType={keyboardType}
          />
        </View>
      </View>
    </>
  );
}
