import React, { useState } from "react";
import { View } from "react-native";
import RouteBox from "../sections/dashboard/climbing/RouteBox";

export default function RoutenList({ routes, expand, hall_name, navigation }) {
  return (
    <View>
      {routes?.map((item, index) => (
        <RouteItem
          key={index}
          item={item}
          expand={expand}
          hall_name={hall_name}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

function RouteItem({ item, expand, hall_name, navigation }) {
  const [expanded, setExpanded] = useState(expand);

  const handlePressRoute = () => {
    if (!expand) {
      // Wenn `expand` false ist, navigiere zur ModifyRoute-Seite und übergebe die Daten
      navigation.navigate("ModifyRoute", {
        color: item.color,
        levelOfDifficulty: item.level_of_difficulty,
        lineNumber: item.line_number,
        routeName: item.route_name,
        Sector: item.sector,
        tilt: item.tilt,
        hallname: hall_name,
      });
    } else {
      // Ansonsten toggle den expanded Zustand
      setExpanded(!expanded);
    }
  };

  return (
    <RouteBox
      color={item.color}
      levelOfDifficulty={item.level_of_difficulty}
      lineNumber={item.line_number}
      routeName={item.route_name}
      Sector={item.sector}
      tilt={item.tilt}
      hallname={hall_name}
      expanded={expanded}
      setExpanded={handlePressRoute}
    />
  );
}
