import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import HeadText from "../../components/text/HeadText.js";
import ButtonInsert from "../../components/buttons/ButtonInsert.js";
import RouteFilter from "../../components/sections/dashboard/climbing/RouteFilter.js";
import RoutesList from "../../components/lists/RoutesList.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Climber } from "../../Controller/Procedures.js";
import { query } from "../../Controller/requestHandler.js";

// Main component for displaying all routes in a climbing hall
export default function HallAllRoutes({ navigation }) {
  const [user, setUser] = useState("");
  const [routes, setRoutes] = useState([]);

  // Effect to load user data from local storage on component mount
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        if (userData) {
          setUser(userData.user);
        } else {
          alert("Error", "Keine Benutzerdaten gefunden.");
        }
      } catch (error) {
        console.error("Failed to load user data", error);
        alert("Fehler", "Laden der Benutzerdaten fehlgeschlagen.");
      }
    };
    getUserData();
  }, []);

  // Effect to fetch routes from the database when the user is set
  useEffect(() => {
    if (user) {
      // Query to get routes by hall name using the user's name
      query(Climber.get_routes_by_hall_name.call, [user])
        .then((res) => {
          const newRoutes = Array.isArray(res.data.data) ? res.data.data : [];
          setRoutes(newRoutes);
          console.log("routes :>> ", routes);
        })
        .catch((err) => alert("Error: ", err));
    }
  }, [user, setRoutes]);

  return (
    <>
      <View>
        <HeadText content="Keep your Routes updated." />

        <RouteFilter hall_name={user} setRoutes={setRoutes} />
      </View>

      <View>
        <ButtonInsert
          onPress={() => navigation.navigate("ModifyRoute")}
          name="New Route"
          hallname={user}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RoutesList
          routes={routes}
          expand={false}
          hall_name={user}
          navigation={navigation}
        />

        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
