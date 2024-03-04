import React, { useState, useEffect } from "react";
// Components
import { TouchableOpacity, View } from "react-native";
import CustTextInput from "../../../input/CustTextInput.js";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import { Climber } from "../../../../Controller/Procedures.js";
import { query } from "../../../../Controller/requestHandler.js";
import { Colors } from "react-native/Libraries/NewAppScreen";
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

  //For magic implementation
  // const [filled, setFilled] = useState(false);
  // const handlePress = () => {
  //   setFilled(!filled);
  // };

  // const [isMagic, setIsMagic] = useState(false);
  // const toggleMagic = () => {
  //   setIsMagic(!isMagic);
  // };

  // Funktionen, um den aktuellen Wert der Textfelder zu aktualisieren
  // useEffect(() => {
  //   console.log("route: " + route_name);
  //   if (route_name) {
  //     query(Climber.get_routes_by_route_name.call, [route_name])
  //       .then((response) => {
  //         // console.log(route_name);
  //         setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
  //       })
  //       .catch((err) => alert("Error: " + err));
  //   }
  // }, [route_name]); // Reagiert nur auf Änderungen von route_name

  // useEffect(() => {
  //   if (sector) {
  //     // Angenommen, es gibt eine Abfrage für den Sektor, die hier verwendet werden soll
  //     query(Climber.get_routes_by_sector.call, [sector])
  //       .then((response) => {
  //         setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
  //       })
  //       .catch((err) => alert("Error: " + err));
  //   }
  // }, [sector]); // Reagiert nur auf Änderungen von sector

  // useEffect(() => {
  //   if (level) {
  //     query(Climber.get_routes_by_difficulty.call, [level])
  //       .then((response) => {
  //         setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
  //       })
  //       .catch((err) => alert("Error: " + err));
  //   }
  // }, [level]); // Reagiert nur auf Änderungen von level

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
        {/* <View style={{ margin: 4 }}>
          <TouchableOpacity onPress={toggleMagic}>
            <Ionicons
              name={isMagic ? "sparkles" : "sparkles-outline"}
              size={36}
              color={isMagic ? "#B000B1" : "#B167B1"}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </>
  );
}
