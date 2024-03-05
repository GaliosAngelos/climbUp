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

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  const [routes, setRoutes] = useState([]); // Zustand für alle geladenen Routen
  const [isLiked, setIsLiked] = useState(false);
  const [reload, setReload] = useState(false);
  // Lade alle Routen, wenn hall_name vorhanden ist
  useEffect(() => {
    if (hall_name) {
      query(Climber.get_routes_by_hall_name.call, [hall_name])
        .then((res) => {
          if (res.data) { // Stelle sicher, dass Daten vorhanden sind
            const newRoutes = Array.isArray(res.data.data) ? res.data.data : [];
            console.log("response :>> ", newRoutes);
            setRoutes(newRoutes); // Speichere alle Routen
            setReload(true);
          }
        })
        .catch((err) => alert("Error: ", err));
    }
  }, [hall_name]);

  // Filterfunktion, die die Routenliste im Frontend aktualisiert

  const toggleLike = () => {
    setIsLiked(!isLiked);
  }

  return (
    <>
      <ButtonBack onPress={() => navigation.goBack()} />
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

      <RouteFilter hall_name={hall_name} setRoutes={setRoutes} routes={routes} reload={reload}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RoutenList routes={routes} expand={true} hall_name={hall_name} />
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}