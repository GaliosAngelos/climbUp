import React from "react";
import { View, Text, Button } from "react-native";
import ButtonSettings from "../../components/reuseable/ButtonSettings";

const nav = [
  { name: "Profile", toScreen: "Profile" },
  { name: "Support", toScreen: "Support" },
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
      {/* <Button
        title="Go to Support Page"
        onPress={() => navigation.navigate("Profile")}
      />

      <Button
        title="Go to Themewechseln Page"
        onPress={() => navigation.navigate("Profile")}
      />  */}
    </View>
  );
}
