import React from "react";
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox.js";
import hallen from "../../_mock/hallen.js";
import HeadText from "../../components/reuseable/HeadText.js";
import CustTextInput from "../../components/reuseable/CustTextInput.js";

export default function ClimbingHallScreen({ navigation }) {
  return (
    <>
      <HeadText content="Where every climb feels like home." />

      <CustTextInput text={"Name, City"} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
