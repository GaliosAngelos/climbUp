import React from "react";
// Components
import { View, Text } from "react-native";
import HeadText from "../../components/text/HeadText.js";

import Ionicons from "react-native-vector-icons/Ionicons";

// --------------------------------------------------------------

// Dashboard for the hallowner
export default function HallDashboardScreen() {
  return (
    <>
      <HeadText content="Dashboard is in Progress!" />
      <View style={{ flexDirection: "row", marginTop: 120 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Ionicons name="build-outline" size={120} color="grey" />
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            In Progress...
          </Text>
        </View>
      </View>
    </>
  );
}
