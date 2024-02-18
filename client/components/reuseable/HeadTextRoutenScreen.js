import React, { useState } from "react";
// Components
import { Text, View, TouchableOpacity } from "react-native";
// Icons
import { Ionicons } from "@expo/vector-icons";
// Styles
import styles from "./allStyles.js";

// ----------------------------------------------------------

// a Textbox at the Top especially for the Route-Screen, contains more (Like-Function and Back-to-ClimbingHalls-Button) than the HeadText
export default function HeadTextRoutenScreen({ content }) {
  const [filled, setFilled] = useState(false);
  const handlePress = () => {
    setFilled(!filled);
    // Hier kannst du deine gewünschte Aktion auslösen
    // Zum Beispiel: Funktion aufrufen, um den "Like" zu speichern oder etwas anderes zu tun
  };

  return (
    <>
      <View style={styles.head}>
        <Text style={styles.h1}>{content}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons
            name={filled ? "heart" : "heart-outline"}
            size={32}
            color={filled ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
