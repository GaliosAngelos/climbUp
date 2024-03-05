import React, { useState, useEffect } from "react";
// Components
import { View } from "react-native";
// Icons
import CustomFilterInput from "../../../input/CustomFilterInput.js";
// ------------------------------------------------------------------

// ClimbingHallBar component, likely used for filtering or searching climbing routes
export default function RouteFilter({ onFilterChange }) {
  const [routeName, setRouteName] = useState("");
  const [level, setLevel] = useState("");
  const [sector, setSector] = useState("");

  useEffect(() => {
    console.log(":>> ", routeName, sector, level);
  }, [routeName, sector, level]);

  const handleFilterChange = () => {
    onFilterChange({ routeName, level, sector });
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 6, marginRight: 5 }}>
          <CustomFilterInput
            label="Route"
            value={routeName}
            onChange={(text) => {
              setRouteName(text);
              handleFilterChange();
            }}
          />
        </View>
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustomFilterInput
            label="Sektor"
            value={sector}
            onChange={(text) => {
              setSector(text);
              handleFilterChange();
            }}
          />
        </View>
        <View style={{ flex: 3, marginRight: 5 }}>
          <CustomFilterInput
            label="Level"
            value={level}
            onChange={(text) => {
              setLevel(text);
              handleFilterChange();
            }}
          />
        </View>
      </View>
    </>
  );
}
