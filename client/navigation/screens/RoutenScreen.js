import React, { useState, useEffect } from "react";
// Components
import { View, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
// import routes from "../../_mock/routes.js";
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
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const [expandedRoute, setExpandedRoute] = useState(null);

  const handlePressRoute = (routeId) => {
    setExpandedRoute(expandedRoute === routeId ? null : routeId);
  };
  
  console.log("hall_name :>> ", hall_name);

  useEffect (() => {
    //  query(`SELECT * from climbup.get_routes_details_by_hall_name2(${hall_name})`)
    // Hall_Owner.insert_route
    // await query(`INSERT INTO climbup.climbing_halls (hall_name, street_address, city, postal_code) VALUES ('testhall3', 'asdf1243','ok','12345')`);
    // let text = `INSERT INTO climbup.climbing_halls.testhall3 (route_name, sector, level_of_difficulty, color, line_number, tilt) VALUES ('Route1', 'A', '3', 'Red', '1', TRUE)`;
      // const values = [`Route ${i}`, 'Sector A', '5.10a', 'Red', 1, false];
    // await query(text);

    test = 'testhall2';
    query(Climber.get_routes_test_2.call, test)
      .then(response => {
        console.log(hall_name);
        // setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
        console.log(response.data);
      })
      .catch(err => alert("Error: " + err));
  }, []);
    // for(let i = 0; i < 10; i++){
      
  // }
// let text = "SELECT * from climbup.climbing_hall";
    // query(text);
  // }, []);
// }, []);
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
        {/* <View>
        {routes && routes.map((item, index) => ( // Überprüfen, ob 'halls' definiert ist
            <RouteBox
    key={index}
    expanded={expandedRoute === index}
    setExpanded={() => handlePressRoute(index)}
              routeName={item.route_name}
              Sector={item.sector}
              levelOfDificulty={item.level_of_difficulty}
              color={item.color}
              lineNumber={item.line_number}
              navigation={navigation}
            />
          ))}
        </View> */}
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
