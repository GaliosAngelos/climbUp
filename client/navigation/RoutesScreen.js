import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity, Alert } from "react-native";
import RouteFilter from "../components/sections/dashboard/climbing/RouteFilter";
import ButtonBack from "../components/buttons/ButtonBack";
import styles from "../components/styles/allStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import RoutesList from "../components/lists/RoutesList";
import { Climber } from "../Controller/Procedures";
import { query } from "../Controller/requestHandler";

// the climber see all the routes from the choosen climbing hall
export default function RoutesScreen({ navigation, route }) {
  const { hall_name } = route.params;
  const [isLike, setIsLike] = useState(route.params.favourite); // Direkt aus route.params.favourite initialisieren
  const [allRoutes, setAllRoutes] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    if (hall_name) {
      query(Climber.get_routes_by_hall_name.call, [hall_name])
        .then((res) => {
          const newRoutes = Array.isArray(res.data.data) ? res.data.data : [];
          setAllRoutes(newRoutes);
          setRoutes(newRoutes);
        })
        .catch((err) => {
          console.error("Error fetching routes: ", err);
          Alert.alert("Error", "Error loading routes.");
        });
    }
  }, [hall_name]);

  useEffect(() => {
    setIsLike(route.params.favourite); // Aktualisiere `isLike` wenn sich `favourite` ändert
  }, [route.params.favourite]);

  const updateFavouriteStatus = () => {
    const method = isLike ? Climber.remove_favorite : Climber.add_favorite;
    query(method.call, [hall_name])
      .then(() => {
        if (isLike) {
          console.log("Climbing is now not in your favourites");
        } else {
          console.log("Climbing in your favourites");
        }
      })
      .catch((err) => {
        console.error("Error updating favorite status: ", err);
        Alert.alert("Error", "Error updating favorite status.");
      });
  };

  const toggleLike = () => {
    setIsLike(!isLike); // Zustand umschalten
    updateFavouriteStatus(); // Favoritenstatus aktualisieren
  };

  return (
    <>
      <ButtonBack onPress={() => navigation.navigate("ClimbingHall")} />
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.h1}>{hall_name}</Text>
          </View>
          <TouchableOpacity
            style={{ marginRight: 7, justifyContent: "center" }}
            onPress={toggleLike}
          >
            <Ionicons
              name={isLike ? "checkmark-circle" : "add-circle-outline"}
              size={36}
              color={isLike ? "green" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <RouteFilter
        setRoutes={setRoutes}
        hall_name={hall_name}
        onFilterChange={(routeName, sector, level) => {
          const filteredRoutes = allRoutes.filter((route) => {
            return (
              (!routeName ||
                route.route_name
                  .toLowerCase()
                  .includes(routeName.toLowerCase())) &&
              (!sector ||
                route.sector.toLowerCase() === sector.toLowerCase()) &&
              (!level || route.level_of_difficulty === level)
            );
          });
          setRoutes(filteredRoutes);
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <RoutesList routes={routes} expand={true} hall_name={hall_name} />
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
