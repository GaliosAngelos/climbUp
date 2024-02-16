import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./allStyles.js";

export default function HeadTextRoutenScreen({ content }) {
    const [filled, setFilled] = useState(false);
    const handlePress = () => {
      setFilled(!filled);
      // Hier kannst du deine gewünschte Aktion auslösen
      // Zum Beispiel: Funktion aufrufen, um den "Like" zu speichern oder etwas anderes zu tun
    };
  
  

    return (
      <>
      <SafeAreaView style={styles.head}>
        <Text style={styles.h1}>{content}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons
            name={filled ? "heart" : "heart-outline"}
            size={32}
            color={filled ? "red" : "black"}
          />
        </TouchableOpacity>

      </SafeAreaView>
      
</>
    );
}