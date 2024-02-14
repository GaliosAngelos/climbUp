import React from "react";
import { View, Button } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox";
import hallen from "../../_mock/hallen.js";

export default function KletternScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {hallen.map((item, index) => (
        <ClimbingHallBox
          key={index}
          name={item.name}
          street={item.street}
          city={item.city}
        />
      ))}
      <Button
        title="Go to RoutenScreen"
        onPress={() => navigation.navigate("Routen")}
      />
    </View>
  );
}
