import React, { useState, useEffect } from "react";
import { View } from "react-native";
import RouteLogBox from "../sections/dashboard/RouteLogBox";
// import statistic from "../../_mock/statistic";
import { Climber } from "../../Controller/Procedures";
import { query } from "../../Controller/requestHandler";
import calculateTimeStamps from "../input/TimeIntervals";

export default function RoutenViewList({ interval }) {
  const [statistics, setStatistics] = useState([]);
  const dateStamps = calculateTimeStamps();
  const [del, setDel] = useState(false);

  const dayone = interval.past;
  const today = interval.now;

  useEffect(() => {
    query(Climber.get_user_climbed_routes.call, [dayone, today])
      // query(Climber.get_routes_by_hall_name.call, ['testhall2'])
      .then((res) => {
        console.log("res :>> ", res.data.data[0].climb_timestamp);
        const newStatistics = Array.isArray(res.data.data) ? res.data.data : [];
        setStatistics(newStatistics);
      })
      .catch((err) => {
        alert("Error: " + err);
      });
    //how to update?
  }, [interval]);

  // In RoutenViewList

  const onDelete = (routeToDelete) => {
    console.log("item :>> ", routeToDelete);
    query(Climber.delete_user_statistic.call, [
      routeToDelete.hall_name,
      routeToDelete.route_name,
      routeToDelete.climb_timestamp,
    ])
      .then((res) => {
        // Löschen erfolgreich, aktualisiere die Liste
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
