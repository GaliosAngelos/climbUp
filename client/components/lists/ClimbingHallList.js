import React from "react";
import { View } from "react-native";
import ClimbingHallBox from "../sections/dashboard/climbing/ClimbingHallBox";

export default function ClimbingHallList({ halls, navigation, favourite }) {
  const isHallsArray = Array.isArray(halls);
  return (
    <View>
      {isHallsArray ? (
        halls.map((item, index) => (
          <ClimbingHallBox
            key={index}
            hall_name={item.hall_name}
            street_address={item.street_address}
            city={item.city}
            postal_code={item.postal_code}
            navigation={navigation}
            favourite={favourite}
          />
        ))
      ) : (
        <View />
      )}
    </View>
  );
}
