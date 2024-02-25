import React from "react";
// Components
import { View, Text, ScrollView} from "react-native";
import HeadText from "../../components/reuseable/HeadText.js";
import styles from "../../components/reuseable/allStyles.js";
import Button from "../../components/reuseable/Button";
import RouteLogFilterButtons from "../../components/reuseable/RouteLogFilterButtons.js";
import routes from "../../_mock/routes.js";
import RouteLogBox from "../../components/reuseable/RouteLogBox.js";
import { sendQuery } from "../../components/reuseable/generalRequest";
// --------------------------------------------------------------

export default function DashboardScreen({ navigation }) {
  // sendQuery("getHalls")
  //   .then((data) => console.log(data.data));
  return (
    <>
      <HeadText content="Elevate your progress!" />
      <View style={{ flexDirection: "row" , marginBottom: 15}}>
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

      <RouteLogFilterButtons/>

      <View style={{flexDirection: "row", paddingHorizontal: 12, paddingTop: 20}}>
        <View style={{flex: 12}}>
        <Text style={styles.h3}>Route</Text>
        </View>
        <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.h3}>LVL</Text>
        </View>
        <View style={{flex: 2, alignItems: "center"}}>
        <Text style={styles.h3}>P</Text>
        </View>
        </View>

      <View>
      {routes.map((item, index) => (
            <RouteLogBox
              key={index}
              routeName={item.routeName}
              levelOfDificulty={item.LevelOfDifficulty}
              numberOfAttempts={item.numberOfAttempts}
              madeIt={item.madeIt}
            />
          ))}
        </View>
        <View style={{ marginBottom: 130 }} />

        </ScrollView>

      
    </>
  );
}
