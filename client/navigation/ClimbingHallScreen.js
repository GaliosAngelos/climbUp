import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../components/sections/dashboard/climbing/ClimbingHallBox.js";
import HeadText from "../components/text/HeadText.js";
import CustTextInput from "../components/input/CustTextInput.js";
import ClimbingHallList from "../components/lists/ClimbingHallList.js";
// import hallenFavourite from "../_mock/hallenFavourite.js";
import { Climber } from "../Controller/Procedures.js";
import { query } from "../Controller/requestHandler.js";

export default function ClimbingHallScreen({ navigation }) {
  const [halls, setHalls] = useState([]);
  const [favouriteHalls, setFavouriteHalls] = useState([]);
  useEffect(() => {
    query(Climber.get_user_favorites).then((res) => {
      const hallsFavourites = Array.isArray(res.data.data) ? res.data.data : [];
      console.log("Favs: " + hallsFavourites);
      setFavouriteHalls (hallsFavourites);
    }).catch (err => {
      alert("Error: " + err);
    });

    query(Climber.get_climbing_halls_list.call)
      .then((res) => {
        // Zugriff auf das Array mit den Kletterhallen über `response.data.data`
        const hallsData = Array.isArray(res.data.data) ? res.data.data : [];
        setHalls(hallsData);
      })
      .catch((err) => alert("Error: " + err));
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
          {favouriteHalls.map((item, index) => (
            <ClimbingHallBox
              key={index}
              hall_name={item.hall_name}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
              favourite={true}
            />
          ))}
        </View>
        {/* Hier verwenden wir die `halls` Daten, die wir aus der API-Anfrage gesetzt haben */}
        {halls.length > 0 && <ClimbingHallList halls={halls} navigation={navigation} />}
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
