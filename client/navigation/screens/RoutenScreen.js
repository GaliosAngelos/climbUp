import React from "react";
import { View, Text, Button } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import HeadText from "../../components/reuseable/HeadText";

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);
  return (
    <>
    <HeadText content={hall_name}/>
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
      </>
  );
}
