import React, { useEffect } from "react";
// Components
import { Text, TouchableOpacity, View } from "react-native";
// Styles
import styles from "../../../styles/allStyles";

// ----------------------------------------------------------------

// the display for a ClimbingHall, that display for the user necessary data of a climbing hall
export default function ClimbingHallBox({
  index,
  hall_name,
  street_address,
  city,
  postal_code,
  navigation,
  favourite,
}) {
  const openHallWithRoutes = () => {
    navigation.navigate("Routen", {
      hall_name: hall_name,
      favourite: favourite,
    });
  }; //navigation after the selection of a climbing hall to the RoutenScreen, that contain the routes for this selected hall

  const replaceUnderscoresWithSpaces = (text) => {
    return text.replace(/_/g, " ");
  };

  const hallname = replaceUnderscoresWithSpaces(hall_name);
  return (
    <TouchableOpacity onPress={openHallWithRoutes}>
      <View
        key={index}
        style={[
          styles.borderBox,
          { borderColor: favourite ? "green" : "lightgrey" },
        ]}
      >
        <Text style={styles.h3}>{hallname}</Text>
        <Text style={styles.text}>
          {street_address}, {postal_code} {city}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
