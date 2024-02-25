import React from "react";
// Components
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../../components/reuseable/ClimbingHallBox.js";
import hallen from "../../_mock/hallen.js";
import HeadText from "../../components/reuseable/HeadText.js";
import {Hall_Owner, Climber } from "../../components/reuseable/Procedures.js"
import CustTextInput from "../../components/reuseable/CustTextInput.js";
import { query } from "../../components/reuseable/generalRequest.js";
import { useState, useEffect } from "react";
// ------------------------------------------------------------
export default function ClimbingHallScreen({ navigation }) {
  const [halls, setHalls] = useState([]); // Verwenden von useState für den Zustand

  useEffect(() => {
    // Laden der Daten beim Initialisieren der Komponente
    query(Climber.get_halls_test.call)
      .then(response => {
        setHalls(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
      })
      .catch(err => alert("Error: " + err));
  }, []);

  return (
    <>
      <HeadText content="Where every climb feels like home." />
      <CustTextInput text={"Name, City"} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
          {hallenFavourite.map((item, index) => (
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


        <View>
        {halls && halls.map((item, index) => ( // Überprüfen, ob 'halls' definiert ist
            <ClimbingHallBox
              key={index}
              hall_name={item.hall_name}
              street_address={item.street_address}
              city={item.city}
              postal_code={item.postal_code}
              navigation={navigation}
              favourite={false}
            />
          ))}
        </View>
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
