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
export default function RouteFilter({ routes, setRoutes, reload }) {
  const [routeName, setRouteName] = useState("");
  const [level, setLevel] = useState("");
  const [sector, setSector] = useState("");

  useEffect(() => {
    console.log(":>> ", routeName, sector, level);
  }, [routeName, sector, level]);

  // const handleFilterChange = () => {
  //   onFilterChange({ routeName, level, sector });
  // };
   useEffect(() => {
    // if(reload){
    // const handleFilterChange = () => {
      // console.log("allRoutes :>> ", routes);           
      // const newRoutes = routes.filter((route) => route.route_name.test(routeName));
      //     // const newRoutes = allRoutes.filter((route) => {
      //     // const routeNameMatch = route?.includes(routeName.toString());
      //     // const sectorMatch = sector ? route.sector.toString().toLowerCase() === sector.toString().toLowerCase() : true;
      //     // const levelMatch = level ? route.level_of_difficulty === level : true;
      //     // return routeNameMatch;//|| sectorMatch || levelMatch;
      //     // if(!routeName && !sector && !level){
      //     //   setReload(true);
      //     // } else {
      //     setRoutes(newRoutes);
      // }
    // };
   }, [reload]);
  
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 6, marginRight: 5 }}>
          <CustomFilterInput
            label="Route"
            value={routeName}
            onChange={(text) => {
              setRouteName(text);
              // handleFilterChange();
            }}
          />
        </View>
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustomFilterInput
            label="Sektor"
            value={sector}
            onChange={(text) => {
              setSector(text);
              // handleFilterChange();
            }}
          />
        </View>
        <View style={{ flex: 3, marginRight: 5 }}>
        <CustomFilterInput
        label="Level"
        value={level}
        onChange={(text) => {
          setLevel(text);
          // handleFilterChange();
        }}
      />
        </View>
      </View>
    </>
  );
};
