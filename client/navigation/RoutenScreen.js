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
  const { hall_name, favourite } = route.params;
  const [allRoutes, setAllRoutes] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [isLiked, setIsLiked] = useState(favourite);
  const [data, setData] = useState({
    route_name: "So",
    sector: null,
    level: null,
  });
  const [name, setName] = useState("Z");

  useEffect(() => {
    if (hall_name) {
      query(Climber.get_routes_by_hall_name.call, [hall_name])
        .then((res) => {
          if (res.data) {
            const newRoutes = Array.isArray(res.data.data) ? res.data.data : [];

            setAllRoutes(newRoutes);
            setRoutes(newRoutes);
          }
        })
        .catch((err) => alert("Error: ", err));
    }
  }, [hall_name]);

  useEffect(() => {
    if (isLiked) {
      query(Climber.add_favorite.call, [hall_name])
        .then((res) => {
          if (res.data) {
            console.log("response: ", res);
          }
        })
        .catch((err) => alert("Error: ", err));
    } else if (!isLiked) {
      query(Climber.remove_favorite.call, [hall_name])
        .then((res) => {
          if (res.data) {
            console.log("response: ", res);
          }
        })
        .catch((err) => alert("Error: ", err));
    }
  }, [isLiked]);

  const handleFilterChange = (routeName, sector, level) => {
    setData({ route_name: routeName, sector: sector, level: level });
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
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

      <RouteFilter onFilterChange={handleFilterChange} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RoutenList routes={routes} expand={true} hall_name={hall_name} />
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
