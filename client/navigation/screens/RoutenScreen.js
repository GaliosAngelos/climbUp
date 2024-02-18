import React from "react";
// Components
import { View, ScrollView } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import RouteFilterBar from "../../components/reuseable/RouteFilterBar.js";
import HeadTextRoutenScreen from "../../components/reuseable/HeadTextRoutenScreen.js";
import routes from "../../_mock/routes.js";

// --------------------------------------------------------------------

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadTextRoutenScreen content={hall_name} />
        <RouteFilterBar />
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
