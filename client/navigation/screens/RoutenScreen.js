import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import styles from "../../components/reuseable/allStyles.js";
import routes from "../../_mock/routes.js";
import { Ionicons } from "@expo/vector-icons";
import CustTextInput from "../../components/reuseable/CustTextInput.js";
import HeadText from "../../components/reuseable/HeadText.js";
import RouteFilter from "../../components/reuseable/HeadText.js";


export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);

  return (
    <>
      <HeadText content={hall_name}/>
       
<RouteFilter/>
        <ScrollView showsVerticalScrollIndicator={false}>

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
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </>
  );
}
