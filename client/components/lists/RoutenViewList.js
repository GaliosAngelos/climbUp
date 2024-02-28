import React from "react";
import { View } from "react-native";
import RouteLogBox from "../sections/dashboard/RouteLogBox";
import statistic from "../../_mock/statistic";

export default function RoutenViewList() {
  return (
    <View>
      {statistic.map((item, index) => (
        <RouteLogBox
          key={index}
          route_name={item.route_name}
          level_of_difficulty={item.level_of_difficulty}
          paused={item.paused}
          success={item.success}
        />
      ))}
    </View>
  );
}
