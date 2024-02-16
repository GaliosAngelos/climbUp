import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ClimbingHallBox({
  index,
  hall_name,
  street_address,
  city,
  postal_code,
  navigation,
}) {
  const openHallWithRoutes = () => {
    navigation.navigate("Routen", { hall_name: hall_name });
  };

  
  return (  
  <TouchableOpacity onPress={openHallWithRoutes}>
    <View key={index} style={styles.borderBox}>
      <Text style={styles.h3}>{hall_name}</Text>
      <Text style={styles.text}>{street_address}</Text>
      <Text style={styles.text}>{city} {postal_code}</Text>
    </View>
    </TouchableOpacity>
  );
}
