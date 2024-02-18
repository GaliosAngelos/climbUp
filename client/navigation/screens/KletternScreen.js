import React from "react";
// Components
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox";
import hallen from "../../_mock/hallen.js";
import HeadText from "../../components/reuseable/HeadText";

// ------------------------------------------------------------

export default function KletternScreen({ navigation }) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadText content="My favourite climbing gym." />
        <View>
          {hallen.map((item, index) => (
            <ClimbingHallBox
              key={index}
              hall_name={item.hall_name}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </>
  );
}
