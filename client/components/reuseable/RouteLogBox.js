// Importing necessary components and libraries
import React, { useState } from "react";
// Components
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import ButtonMedium from "../../components/reuseable/ButtonMedium";
// Style
import styles from "../../components/reuseable/allStyles.js";

// --------------------------------------------------------------------

export default function RouteLogBox(
  routeName,
  levelOfDificulty,
  numberOfAttempts,
  madeIt
) {
  return (
    <>
      <View
        style={{
          height: 45,
          backgroundColor: "lightgrey",
          marginTop: 20,
          borderRadius: 14,
        }}
      ></View>
    </>
  );
}
