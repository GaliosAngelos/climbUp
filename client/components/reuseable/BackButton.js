import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../../components/reuseable/allStyles.js";

export default function BackButton({ prevScreen }) {

    return (
    <>
      <View style={{ flexDirection: "row"}}>
        <TouchableOpacity style={styles.buttonlarge}>
          <Text style={styles.buttonlargetext}>Back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}