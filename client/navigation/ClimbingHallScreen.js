import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import HeadText from "../components/text/HeadText.js";
import CustTextInput from "../components/input/CustTextInput.js";
import ClimbingHallList from "../components/lists/ClimbingHallList.js";
import { Climber } from "../Controller/Procedures.js";
import { query } from "../Controller/requestHandler.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ClimbingHallScreen({ navigation }) {
  const [user, setUser] = useState();
  const [halls, setHalls] = useState([]);
  const [favouriteHalls, setFavouriteHalls] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userData");
        const userData = userDataString ? JSON.parse(userDataString) : null;
        if (userData) {
          setUser(userData.user);
        }
      } catch (error) {
        console.error("Failed to load user data", error);
        Alert.alert("Fehler", "Laden der Benutzerdaten fehlgeschlagen.");
      }
    };

    getUserData();
  }, []);

  useEffect(() => {
    const fetchHallsAndFavourites = async () => {
      if (!user) return; // Stelle sicher, dass ein Benutzer gesetzt ist, bevor du fortfährst

      try {
        const favsRes = await query(Climber.get_user_favorites.call, [user]);
        const hallsRes = await query(Climber.get_climbing_halls_list.call);
        const hallsFavourites = Array.isArray(favsRes.data.data)
          ? favsRes.data.data
          : [];
        const hallsData = Array.isArray(hallsRes.data.data)
          ? hallsRes.data.data
          : [];
        setFavouriteHalls(hallsFavourites);

        const filteredHalls = hallsData.filter(
          (hall) =>
            !hallsFavourites.some(
              (favHall) => favHall.hall_name === hall.hall_name
            )
        );

        setHalls(filteredHalls);
      } catch (err) {
        Alert.alert("Error", "Error: " + err);
      }
    };

    if (user) {
      fetchHallsAndFavourites();
    }
  }, [user]); // Füge `user` als Abhängigkeit hinzu, um die Funktion erneut auszuführen, sobald `user` gesetzt ist.

  return (
    <>
      <HeadText content="Where every climb feels like home." />
      <CustTextInput text={"Name, City"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {favouriteHalls.length >= 0 && (
            <ClimbingHallList
              halls={favouriteHalls}
              navigation={navigation}
              favourite={true}
            />
          )}
        </View>
        {halls.length > 0 && (
          <ClimbingHallList
            halls={halls}
            navigation={navigation}
            favourite={false}
          />
        )}
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
