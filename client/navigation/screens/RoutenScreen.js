import React, { useState } from "react";
// Components
import { View, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import routes from "../../_mock/routes.js";
import HeadText from "../../components/reuseable/HeadText.js";
import RouteFilter from "../../components/reuseable/RouteFilter.js";
import ButtonBack from "../../components/reuseable/ButtonBack.js";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";

// --------------------------------------------------------------------
export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const [expandedRoute, setExpandedRoute] = useState(null);

  const handlePressRoute = (routeId) => {
    setExpandedRoute(expandedRoute === routeId ? null : routeId);
  };

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

      <RouteFilter />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {routes.map((item, index) => (
            <RouteBox
    key={index}
    expanded={expandedRoute === index}
    setExpanded={() => handlePressRoute(index)}
              routeName={item.routeName}
              Sector={item.Sector}
              levelOfDificulty={item.LevelOfDifficulty}
              color={item.color}
              lineNumber={item.lineNumber}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
