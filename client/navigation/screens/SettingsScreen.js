import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        SettingsScreen
      </Text>

      {/* Anders Programmieren -> 'dont repeat yourself' */}
      <Button
        title="Go to Login Page / Nur als Test"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Go to Profile Page"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Go to Support Page"
        onPress={() => navigation.navigate("Profile")}
      />

      <Button
        title="Go to Themewechseln Page"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
