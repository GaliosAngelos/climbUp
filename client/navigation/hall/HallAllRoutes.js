import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import HeadText from "../../components/text/HeadText.js";
import ButtonInsert from "../../components/buttons/ButtonInsert.js";
import RouteFilter from "../../components/sections/dashboard/climbing/RouteFilter.js";
import RoutesList from "../../components/lists/RoutesList.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Climber } from "../../Controller/Procedures.js";
import { query } from "../../Controller/requestHandler.js";

export default function HallAllRoutes({ navigation }) {
  const [user, setUser] = useState("");
  const [routes, setRoutes] = useState([]);

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

  useEffect(() => {
    if (user) {
      query(Climber.get_routes_by_hall_name.call, [user])
        .then((res) => {
          // console.log("res :>> ", res.data);
          console.log("user :>> ", user);
          if (res.data) {
            // Stelle sicher, dass Daten vorhanden sind
            const newRoutes = Array.isArray(res.data.data) ? res.data.data : [];
            // console.log("newRoutes :>> ", newRoutes);
            setRoutes(newRoutes); // Initial werden alle Routen angezeigt
          }
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
