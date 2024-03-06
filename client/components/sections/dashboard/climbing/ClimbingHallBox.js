import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../../styles/allStyles";

export default function ClimbingHallBox({
  hall_name,
  street_address,
  city,
  postal_code,
  navigation,
  favourite,
}) {
  const openHallWithRoutes = () => {
    navigation.navigate("Routes", {
      hall_name,
      favourite,
    });
    console.log("favouritebox :>> ", favourite);
  };
  const hallname = hall_name.replace(/_/g, " ");

  return (
    <TouchableOpacity onPress={openHallWithRoutes}>
      <View
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
