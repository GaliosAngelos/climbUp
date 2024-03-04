import React, {useState, useEffect} from "react";
// Components
import { View, Text, ScrollView } from "react-native";
import HeadText from "../components/text/HeadText.js";
import styles from "../components/styles/allStyles.js";
import RouteLogFilterButtons from "../components/buttons/RouteLogFilterButtons.js";
import RoutenViewList from "../components/lists/RoutenViewList.js";
import { query } from "../Controller/requestHandler.js";
import { Climber } from "../Controller/Procedures.js";
import calculateTimeStamps from "../components/input/TimeIntervals.js";
// --------------------------------------------------------------

export default function DashboardScreen() {
  const [routes, setRoutes] = useState([]); // Verwenden von useState für den Zustand
  const now = calculateTimeStamps().now;
  const [selectedTimeframe, setSelectedTimeframe] = useState();

// Callback-Funktion, die von RouteLogFilterButtons aufgerufen wird
const handleTimeframeChange = (buttonId) => {
  setSelectedTimeframe(buttonId);
  // Zusätzlich können Sie hier die Logik implementieren, um die Routen basierend auf dem neuen Timeframe zu aktualisieren.
};
  // useEffect(() => {
  //   // if (routes) {
  //     // query(Climber.get_user_climbed_routes.call, [calculateTimeStamps().now, calculateTimeStamps().oneYearAgo])
  //      query(Climber.get_climbing_halls_list.call)
  //     .then((response) => {
  //         setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
  //       }).then(() => {
  //         console.log("response new: " + routes.forEach(i => console.log(i)));
  //       })
  //       .catch((err) => alert("Error: " + err));
  //   // }
  // }, [selectedTimeframe]); // Reagiert auf Änderungen von hall_name oder routes
  

  return (
    <>
      <HeadText content="Elevate your progress!" />
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>125</Text>
          <Text style={styles.h3}>Climbs</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>6+</Text>
          <Text style={styles.h3}>best Level</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <RouteLogFilterButtons onSelectedButtonChange={handleTimeframeChange} /> 
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 12,
            paddingTop: 20,
          }}
        >
          <View style={{ flex: 12 }}>
            <Text style={styles.h3}>Route</Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.h3}>LVL</Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.h3}>P</Text>
          </View>
        </View>
        <RoutenViewList />
        <View style={{ marginBottom: 150 }} />
      </ScrollView>
    </>
  );
}
