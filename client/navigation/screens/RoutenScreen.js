import React, { useState, useEffect } from "react";
// Components
import { View, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import HeadText from "../../components/reuseable/HeadText.js";
import RouteFilter from "../../components/reuseable/RouteFilter.js";
import ButtonBack from "../../components/reuseable/ButtonBack.js";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Climber,Hall_Owner } from "../../components/reuseable/Procedures.js";
import { query } from "../../components/reuseable/generalRequest.js";
// --------------------------------------------------------------------
export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  const [routes, setRoutes] = useState([]); // Verwenden von useState für den Zustand
  const [isLiked, setIsLiked] = useState(false);
   // Filterzustände

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const [expandedRoute, setExpandedRoute] = useState(null);

  const handlePressRoute = (routeId) => {
    setExpandedRoute(expandedRoute === routeId ? null : routeId);
  };


  useEffect(() => {
    if (routes) {
      query(Climber.get_routes_by_hall_name.call, [hall_name])
        .then(response => {
          setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
        })
        .catch(err => alert("Error: " + err));
    }
  }, [hall_name]); // Reagiert auf Änderungen von hall_name oder routes


  return (
    <>
        <ButtonBack onPress={() => navigation.navigate("ClimbingHall")}/>
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.h1}>{hall_name}</Text>
          </View>
          <TouchableOpacity
            style={{marginRight: 7, justifyContent: "center"}}
            
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

      <RouteFilter 
        setRoutes={setRoutes}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
        {routes && routes.map((item, index) => ( // Überprüfen, ob 'routes' definiert ist
            <RouteBox
    key={index}
    expanded={expandedRoute === index}
    setExpanded={() => handlePressRoute(index)}
              color={item.color}
              levelOfDificulty={item.level_of_difficulty}
              lineNumber={item.line_number}
              routeName={item.route_name}
              Sector={item.sector}
              Tilt={item.tilt}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
