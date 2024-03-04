import React from "react";
import { useState, useEffect } from "react";
// Components
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import RouteFilter from "../components/sections/dashboard/climbing/RouteFilter.js";
import ButtonBack from "../components/buttons/ButtonBack.js";
import styles from "../components/styles/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
// Query
import RoutenList from "../components/lists/RoutenList.js";
import { Climber } from "../Controller/Procedures.js";
import { query } from "../Controller/requestHandler.js";

// --------------------------------------------------------------------
export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  const [routes, setRoutes] = useState([]); // Verwenden von useState für den Zustand
  const [isLiked, setIsLiked] = useState(false);
  // Filterzustände

  useEffect(() => {
    if (routes) {
      query(Climber.get_routes_by_hall_name.call, [hall_name])
        .then((response) => {
          console.log("response: " + response);
          setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
        })
        .catch((err) => alert("Error: " + err));
    }
  }, [hall_name]); // Reagiert auf Änderungen von hall_name oder routes

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <ButtonBack onPress={() => navigation.navigate("ClimbingHal")} />
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.h1}>{hall_name}</Text>
          </View>
          <TouchableOpacity
            style={{ marginRight: 7, justifyContent: "center" }}
          >
            <Ionicons
              name={isLiked ? "checkmark-circle" : "add-circle-outline"}
              size={36}
              color={isLiked ? "green" : "black"}
              onPress={toggleLike}
            />
          </TouchableOpacity>
        </View>
      </View>

      <RouteFilter setRoutes={setRoutes} routes={routes} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RoutenList routes={routes} expand={true} hall_name={hall_name} />
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
