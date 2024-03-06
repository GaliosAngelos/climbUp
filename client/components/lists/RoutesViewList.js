import React, { useState, useEffect } from "react";
import { View } from "react-native";
import RouteLogBox from "../sections/dashboard/RouteLogBox";
import { Climber } from "../../Controller/Procedures";
import { query } from "../../Controller/requestHandler";

// Routesviewlist is mapping the climbed routes
export default function RoutesViewList({ interval }) {
  const [statistics, setStatistics] = useState([]);

  const dayone = interval.past;
  const today = interval.now;

  useEffect(() => {
    query(Climber.get_user_climbed_routes.call, [dayone, today])
      .then((res) => {
        console.log("res :>> ", res.data.data[0].climb_timestamp);
        const newStatistics = Array.isArray(res.data.data) ? res.data.data : [];
        setStatistics(newStatistics);
      })
      .catch((err) => {
        alert("Error: " + err);
      });
  }, [interval]);

  const onDelete = (routeToDelete) => {
    console.log("item :>> ", routeToDelete);
    query(Climber.delete_user_statistic.call, [
      routeToDelete.hall_name,
      routeToDelete.route_name,
      routeToDelete.climb_timestamp,
    ])
      .then((res) => {
        const updatedStatistics = statistics.filter(
          (item) =>
            item.route_name !== routeToDelete.route_name ||
            item.climb_timestamp !== routeToDelete.climb_timestamp
        );
        setStatistics(updatedStatistics);
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <View>
      {statistics.map((item, index) => (
        <RouteLogBox key={index} item={item} onDelete={onDelete} />
      ))}
    </View>
  );
}
