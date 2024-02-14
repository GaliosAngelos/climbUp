import React from "react";
import { View, Text, Button } from "react-native";
import CustTextInput from "../../components/reuseable/CustTextInput";
import CustTextInputPassword from "../../components/reuseable/CustTextInputPassword";
import RouteFilterBar from "../../components/reuseable/ButtonSmall";

export default function KletternScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        KletternScreen
      </Text>
      <Button
        title="Go to RoutenScreen"
        onPress={() => navigation.navigate("Routen")}
      />
    </View>
  );
}