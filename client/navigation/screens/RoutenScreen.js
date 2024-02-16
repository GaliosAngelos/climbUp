import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import HeadText from "../../components/reuseable/HeadText";
import RouteFilterBar from "../../components/reuseable/RouteFilterBar.js";
import styles from "../../components/reuseable/allStyles.js";
import HeadTextRoutenScreen from "../../components/reuseable/HeadTextRoutenScreen.js";

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);
  return (
    <>
    <HeadTextRoutenScreen content={hall_name}/>
    <ScrollView showsVerticalScrollIndicator={false}>
    <RouteFilterBar/>
      <RouteBox
        routename="Angelos Kletterzentrum"
        sector="A"
        levelofdifficulty="7-"
        color="blue"
        linenumber="151"
      />
      <RouteBox
        routename="Angelos Kletterzentrum"
        sector="A"
        levelofdifficulty="7-"
        color="blue"
        linenumber="151"
      />
      <RouteBox
        routename="Angelos Kletterzentrum"
        sector="A"
        levelofdifficulty="7-"
        color="blue"
        linenumber="151"
      />
      <RouteBox
        routename="Angelos Kletterzentrum"
        sector="A"
        levelofdifficulty="7-"
        color="blue"
        linenumber="151"
      />
      <RouteBox
        routename="Angelos Kletterzentrum"
        sector="A"
        levelofdifficulty="7-"
        color="blue"
        linenumber="151"
      />
      </ScrollView>
      </>
  );
}
