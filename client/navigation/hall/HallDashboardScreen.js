import React from "react";
// Components
import { View, Text } from "react-native";
import HeadText from "../../components/text/HeadText.js";
import styles from "../../components/styles/allStyles.js";

// --------------------------------------------------------------

// Dashboard for the hallowner
export default function HallDashboardScreen() {
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
    </>
  );
}
