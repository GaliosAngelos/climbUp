import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import ClimbingHallBox from "../components/sections/dashboard/climbing/ClimbingHallBox.js";
import HeadText from "../components/text/HeadText.js";
import ClimbingHallList from "../components/lists/ClimbingHallList.js";
import { Climber } from "../Controller/Procedures.js";
import { query } from "../Controller/requestHandler.js";
import CustomTextInputFilter from "../components/input/CustomFilterInput.js";

export default function ClimbingHallScreen({ navigation }) {
  const [halls, setHalls] = useState([]);
  const [favouriteHalls, setFavouriteHalls] = useState([]);
  const [filterRequest, setFilterRequest] = useState("");
  const requestArray = filterRequest.split(',');
  useEffect(() => {
    console.log(":>> ", "Name/City Request: ", requestArray);
  }, [filterRequest]);

  useEffect(() => {
    query(Climber.get_filtered_halls.call, [filterRequest])
    .then((res) => {
        if (res.data) { 
          const filteredHalls = Array.isArray(res.data.data) ? res.data.data : [];
          console.log("filtered Halls :>> ", filteredHalls);
          setHalls(filteredHalls);
        }
    })
    .catch((err) => {
      alert("Error: ", err);
    });

    query(Climber.get_user_favorites.call)
        .then((res) => {
          const hallsFavourites = Array.isArray(res.data.data)
            ? res.data.data
            : [];
          setFavouriteHalls(hallsFavourites);
        })
        .catch((err) => {
          alert("Error: ", err);
        });
   }, [filterRequest,]);
  

  const replaceUnderscoresWithSpaces = (text) => {
    return text.replace(/_/g, " ");
  };

  return (
    <>
      <HeadText content="Where every climb feels like home." />
      <CustomTextInputFilter
        label="Hallname, City"
        value={filterRequest}
        onChange={(text) => {
          setFilterRequest(text);
        }}
      />
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
        {halls.length > 0 && (
          <ClimbingHallList halls={halls} navigation={navigation} />
        )}
        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
