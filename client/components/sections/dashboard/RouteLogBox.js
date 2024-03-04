import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/allStyles";
import { Swipeable } from "react-native-gesture-handler";

export default function RouteLogBox({ item, onDelete }) {
  // Rendermethode für die rechte Wischaktion
  const renderRightActions = () => {
    return (
      <TouchableOpacity
        onPress={() => onDelete(item)}
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          borderRadius: 14,
          padding: 12,
        }}
      >
        <Text style={{ color: "white" }}>Löschen</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View
        style={{
          backgroundColor: item.reachedTop ? "#8FD78F" : "#F5BBBA",
          marginTop: 15,
          borderRadius: 14,
          padding: 12,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 12 }}>
            <Text style={styles.h3}>{item.route_name}</Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.h3}>{item.level_of_difficulty}</Text>
          </View>
          <View style={{ flex: 2, alignItems: "center" }}>
            <Text style={styles.h3}>{item.paused}</Text>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}
