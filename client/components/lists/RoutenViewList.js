import React, {useState, useEffect} from "react";
import { View } from "react-native";
import RouteLogBox from "../sections/dashboard/RouteLogBox";
// import statistic from "../../_mock/statistic";
import { Climber } from "../../Controller/Procedures";
import { query } from "../../Controller/requestHandler";
import calculateTimeStamps from "../input/TimeIntervals";

export default function RoutenViewList(timeinterval) {
  const [statistics, setStatistics] = useState([]);
  const timesStamp = calculateTimeStamps();
  useEffect(() => {
    query(Climber.get_user_statistics.call, [calculateTimeStamps().oneMonthAgo, calculateTimeStamps().now])
    .then((res) => {
      const newStatistics = Array.isArray(res.data.data) ? res.data.data : [];
      setStatistics(newStatistics);
    }).catch((err) => {alert("Error: "+ err)
      });
      //how to update?
  },[]);

  return (
    <View>
      {statistics.map((item, index) => (
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
