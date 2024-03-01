import React from "react";
// Components
import { View, Text, ScrollView } from "react-native";
import HeadText from "../components/text/HeadText.js";
import styles from "../components/styles/allStyles.js";
import RouteLogFilterButtons from "../components/buttons/RouteLogFilterButtons.js";
import RoutenViewList from "../components/lists/RoutenViewList.js";
import { query } from "../Controller/requestHandler.js";
// --------------------------------------------------------------

export default function DashboardScreen() {
  // sendQuery("getHalls")
  //   .then((data) => console.log(data.data));
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
        <RouteLogFilterButtons />

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
