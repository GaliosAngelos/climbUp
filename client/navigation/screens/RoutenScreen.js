import React from "react";
import { View, Text, Button } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Login")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        RoutenScreen
      </Text>
      <Button
        title="Go to Kletterhalle/Zurück"
        onPress={() => navigation.navigate("Klettern")}
      />
      <RouteBox
        routename="yo"
        sector="A"
        levelofdifficulty="7-"
        color="blue"
        linenumber="151"
      />
    </View>
  );
}
