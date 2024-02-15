import React from "react";
import { View, Text, Button } from "react-native";
import ButtonSettings from "../../components/reuseable/ButtonSettings";

const nav = [
  { name: "Profile", toScreen: "Profile" },
  { name: "Support", toScreen: "Support" },
  { name: "Login", toScreen: "Login" },
];

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Anders Programmieren -> 'dont repeat yourself' */}
      {nav.map((item, index) => (
        <ButtonSettings
          key={index}
          name={item.name}
          toScreen={item.toScreen}
          navigation={navigation}
        />
      ))}
    </View>
  );
}
