import React, { useState, useEffect } from "react";
import { View, ScrollView, Alert } from "react-native";
import ClimbingHallBox from "../components/sections/dashboard/climbing/ClimbingHallBox.js";
import HeadText from "../components/text/HeadText.js";
import CustTextInput from "../components/input/CustTextInput.js";
import ClimbingHallList from "../components/lists/ClimbingHallList.js";
import { Climber } from "../Controller/Procedures.js";
import { query } from "../Controller/requestHandler.js";

export default function ClimbingHallScreen({ navigation }) {
  const [halls, setHalls] = useState([]);
  const [favouriteHalls, setFavouriteHalls] = useState([]);

  useEffect(() => {
    const fetchHallsAndFavourites = async () => {
      try {
        const favsRes = await query(Climber.get_user_favorites.call);
        const hallsRes = await query(Climber.get_climbing_halls_list.call);
        const hallsFavourites = Array.isArray(favsRes.data.data)
          ? favsRes.data.data
          : [];
        const hallsData = Array.isArray(hallsRes.data.data)
          ? hallsRes.data.data
          : [];

        setFavouriteHalls(hallsFavourites);

        // Filter `hallsData` um Favoriten zu entfernen
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

    fetchHallsAndFavourites();
  }, []);

  const replaceUnderscoresWithSpaces = (text) => {
    return text.replace(/_/g, " ");
  };

  return (
    <>
      <HeadText content="Where every climb feels like home." />
      <CustTextInput text={"Name, City"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {favouriteHalls.length > 0 && (
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
