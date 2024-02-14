import React from "react";
import { View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function ClimbingHallBox({ name, street, city }) {
      return (
        <View style={styles.container}>
          <View style={styles.borderBox}>
            <Text style={styles.h3}>{name}</Text>
            <Text style={styles.text}>{street}</Text>
            <Text style={styles.text}>{city}</Text>
          </View>
        </View>
      );
    }


