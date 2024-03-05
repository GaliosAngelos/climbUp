import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles/allStyles";
import { Swipeable } from "react-native-gesture-handler";

export default function RouteLogBox({ item, onDelete }) {
  const swipeableRef = useRef(null);
  const renderRightActions = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (swipeableRef.current) {
            swipeableRef.current.close();
          }
          onDelete(item);
        }}
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          borderRadius: 14,
          padding: 12,
        }}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable ref={swipeableRef} renderRightActions={renderRightActions}>
      <View
        style={{
          backgroundColor: item.successful ? "#8FD78F" : "#F5BBBA",
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
