import React from "react";
// Components
import { View, Text, Button } from "react-native";
import { sendQuery } from "../../components/reuseable/generalRequest";
// --------------------------------------------------------------

export default function DashboardScreen({ navigation }) {
  sendQuery("getHalls")
    .then((data) => console.log(data.data));
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => 
          navigation.navigate("Dashboard")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        Dashboard
      </Text>
    </View>
  );
}
