import React, { useState, useEffect } from "react";
// Components
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../components/sections/dashboard/climbing/ClimbingHallBox.js";
import HeadText from "../components/text/HeadText.js";
import CustTextInput from "../components/input/CustTextInput.js";
import ClimbingHallList from "../components/lists/ClimbingHallList.js";
//Mock
import hallenFavourite from "../_mock/hallenFavourite.js";
import { Climber } from "../Controller/Procedures.js";
import { query } from "../Controller/requestHandler.js";
// ------------------------------------------------------------

export default function ClimbingHallScreen({ navigation }) {
  const [halls, setHalls] = useState([]); // Verwenden von useState für den Zustand

  useEffect(() => {
    // Laden der Daten beim Initialisieren der Komponente
    query(Climber.get_climbing_halls_list.call)
      .then((response) => {
        setHalls(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
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
          {hallenFavourite.map((item, index) => (
            <ClimbingHallBox
              key={index}
              hall_name={replaceUnderscoresWithSpaces(item.hall_name)}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
              favourite={true}
            />
          ))}
        </View>
        <ClimbingHallList halls={halls} navigation={navigation} />
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
