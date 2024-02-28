import React from "react";
import { View } from "react-native";
import ClimbingHallBox from "../sections/dashboard/climbing/ClimbingHallBox";

export default function ClimbingHallList({ halls, navigation }) {
  return (
    <View>
      {halls &&
        halls.map(
          (
            item,
            index // Überprüfen, ob 'halls' definiert ist
          ) => (
            <ClimbingHallBox
              key={index}
              hall_name={item.hall_name}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
              favourite={false}
            />
          )
        )}
    </View>
  );
}
