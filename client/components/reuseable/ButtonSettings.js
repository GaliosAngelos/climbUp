import React from "react";
// Components
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// --------------------------------------------------------------------------

export default function ButtonSettings({ key, name, toScreen, navigation }) {
  return (
    <TouchableOpacity
      key={key}
      style={styles.button}
      onPress={() => navigation.navigate(toScreen)}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2, // Dicke der Linie
    borderColor: "black", // Farbe der Linie
    borderRadius: 50, // Rundung der Ecken, ein hoher Wert sorgt für einen runden Effekt
    paddingHorizontal: 30, // Horizontaler Abstand innen
    paddingVertical: 10, // Vertikaler Abstand innen
    justifyContent: "center", // Zentriert den Inhalt vertikal im Button
    alignItems: "center", // Zentriert den Inhalt horizontal im Button
  },
  text: {
    color: "black", // Farbe des Textes
    fontSize: 16, // Größe des Textes
  },
});
