import React from "react";
import { View, Button, ScrollableView } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox";
import hallen from "../../_mock/hallen.js";
import HeadText from "../../components/reuseable/HeadText";

export default function KletternScreen({ navigation }) {
  return (
    <>
      <HeadText content="My favourite climbing gym." />
      <Button
        title="Go to RoutenScreen"
        onPress={() => navigation.navigate("Routen")}
      />
      <View>
        {hallen.map((item, index) => (
          <ClimbingHallBox
            key={index}
            hall_name={item.hall_name}
            street_address={item.street_address}
            city={item.city}
            navigation={navigation}
          />
        ))}
      </View>
    </>
  );
}
