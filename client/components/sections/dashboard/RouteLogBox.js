// Importing necessary components and libraries
import React from "react";
// Components
import { View, Text } from "react-native";
// Style
import styles from "../../styles/allStyles";

// --------------------------------------------------------------------

export default function RouteLogBox({
  route_name,
  level_of_difficulty,
  paused,
  success,
}) {
  return (
    <>
      <View
        style={{
          backgroundColor: success ? "#8FD78F" : "#F5BBBA",
          marginTop: 15,
          borderRadius: 14,
          padding: 12,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 12 }}>
            <Text style={styles.h3}>{route_name}</Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.h3}>{level_of_difficulty}</Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.h3}>{paused}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
