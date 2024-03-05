import React, { useState, useEffect } from "react";
import { View } from "react-native";
import RouteLogBox from "../sections/dashboard/RouteLogBox";
// import statistic from "../../_mock/statistic";
import { Climber } from "../../Controller/Procedures";
import { query } from "../../Controller/requestHandler";

export default function RoutesViewList({ interval }) {
  const [statistics, setStatistics] = useState([]);

  const dayone = interval.past;
  const today = interval.now;

  useEffect(() => {
    query(Climber.get_user_climbed_routes.call, [dayone, today])
      .then((res) => {
        const newStatistics = Array.isArray(res.data.data) ? res.data.data : [];
        setStatistics(newStatistics);
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  }, [interval]);

  return (
    <View>
      {statistics.map((item, index) => (
        <RouteLogBox
          key={index}
          route_name={item.route_name}
          level_of_difficulty={item.level_of_difficulty}
          paused={item.paused}
          reachedTop={item.successful}
        />
      ))}
    </View>
  );
}
