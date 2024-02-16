import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import HeadText from "../../components/reuseable/HeadText";
import RouteFilterBar from "../../components/reuseable/RouteFilterBar.js";
import styles from "../../components/reuseable/allStyles.js";
import HeadTextRoutenScreen from "../../components/reuseable/HeadTextRoutenScreen.js";
import routes from "../../_mock/routes.js";

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
    <HeadTextRoutenScreen content={hall_name}/>
    <RouteFilterBar/>
    <View>
        {routes.map((item, index) => (
          <RouteBox
            key={index}
            routeName={item.routeName}
            Sector={item.Sector}
            levelOfDificulty={item.LevelOfDifficulty}
            color={item.color}
            lineNumber={item.lineNumber}
            navigation={navigation}
          />
        ))}
      </View>
      <View style={{marginBottom: 100}}/>
      </ScrollView>
      </>
  );
}
