import React from "react";
// Components
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox.js";
import hallen from "../../_mock/hallen.js";
import hallenFavourite from "../../_mock/hallenFavourite.js";

import HeadText from "../../components/reuseable/HeadText.js";

import CustTextInput from "../../components/reuseable/CustTextInput.js";

// ------------------------------------------------------------

export default function ClimbingHallScreen({ navigation }) {
  return (
    <>
      <HeadText content="Where every climb feels like home." />
      <CustTextInput text={"Name, City"} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
          {hallenFavourite.map((item, index) => (
            <ClimbingHallBox
              key={index}
              hall_name={item.hall_name}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
              favourite={true}
            />
          ))}
        </View>


        <View>
          {hallen.map((item, index) => (
            <ClimbingHallBox
              key={index}
              hall_name={item.hall_name}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
              favourite={false}
            />
          ))}
        </View>
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
