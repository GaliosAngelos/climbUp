import React from "react";
import { View, Button, ScrollableView } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox";
import hallen from "../../_mock/hallen.js";
import HeadText from "../../components/reuseable/HeadText";
import styles from "../../components/reuseable/allStyles.js";

export default function KletternScreen({ navigation }) {
  return (
    <>
    <View style={styles.container}>
    <HeadText content="My favourite climbing gym." />
    <Button
        title="Go to RoutenScreen"
        onPress={() => navigation.navigate("Routen")}
      />
    <View>
      {hallen.map((item, index) => (
        <ClimbingHallBox
          key={index}
          name={item.hall_name}
          street={item.street_address}
          city={item.city}
        />
      ))}
    </View>
    </View>

  </>
  );
}
