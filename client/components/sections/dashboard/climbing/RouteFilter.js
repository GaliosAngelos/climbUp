import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Climber } from "../../../../Controller/Procedures.js";
import { query } from "../../../../Controller/requestHandler.js";
import CustomTextInputFilter from "../../../input/CustomFilterInput.js";
// ------------------------------------------------------------------

export default function RouteFilter({ setRoutes, hall_name }) {
  const [routeName, setRouteName] = useState("");
  const [level, setLevel] = useState("");
  const [sector, setSector] = useState("");

  useEffect(() => {
    console.log(
      ":>> ",
      "routename: ",
      routeName,
      "sector: ",
      sector,
      "level: ",
      level
    );
  }, [routeName, sector, level]);

  useEffect(() => {
    query(Climber.get_filtered_routes.call, [
      hall_name,
      level,
      sector,
      routeName,
    ]).then((res) => {
      if (res.data) {
        const filteredRoutes = Array.isArray(res.data.data)
          ? res.data.data
          : [];
        console.log("filteredRoutes :>> ", filteredRoutes);
        setRoutes(filteredRoutes);
      }
    });
  }, [routeName, sector, level]);

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 6, marginRight: 5 }}>
          <CustomTextInputFilter
            label="Route"
            value={routeName}
            onChange={(text) => {
              setRouteName(text);
            }}
          />
        </View>
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustomTextInputFilter
            label="Sektor"
            value={sector}
            onChange={(text) => {
              setSector(text);
            }}
          />
        </View>
        <View style={{ flex: 3, marginRight: 5 }}>
          <CustomTextInputFilter
            label="Level"
            value={level}
            onChange={(text) => {
              setLevel(text);
            }}
          />
        </View>
      </View>
    </>
  );
}
