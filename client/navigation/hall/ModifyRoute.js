import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import HeadText from "../../components/text/HeadText";
import ButtonBack from "../../components/buttons/ButtonBack";
import RouteBox from "../../components/sections/dashboard/climbing/RouteBox";
import CustTextInput from "../../components/input/CustTextInput";
import Button from "../../components/buttons/ButtonInsert";
import ButtonDeleteUpdate from "../../components/buttons/ButtonDeleteUpdate";
import styles from "../../components/styles/allStyles";

export default function ModifyRoute({ navigation, route }) {
  const [item, setItem] = useState({
    color: "Test",
    level_of_difficulty: "",
    line_number: "",
    route_name: "",
    sector: "",
    tilt: "",
  });

  console.log("route :>> ", route && route.params);

  useEffect(() => {
    // Prüfe, ob 'route' und 'route.params' existieren, bevor du versuchst, Werte zu setzen
    if (route && route.params) {
      setItem({
        color: route.params.color || "",
        level_of_difficulty: route.params.levelOfDificulty || "",
        line_number: route.params.lineNumber || "",
        route_name: route.params.routeName || "",
        sector: route.params.Sector || "",
        tilt: route.params.Tilt || "",
      });
    }
  }, [route]);

  const updateField = (key, value) => {
    setItem((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const colors = [
    "black",
    "purple",
    "blue",
    "green",
    "red",
    "orange",
    "yellow",
    "white",
  ];

  const onSubmit = () => {
    // Validierungslogik und Navigation
    navigation.navigate("HallAllRoutes");
    setItem({
      color: "",
      level_of_difficulty: "",
      line_number: "",
      route_name: "",
      sector: "",
      tilt: "",
    });
  };

  const back = () => {
    setItem({
      color: "",
      level_of_difficulty: "",
      line_number: "",
      route_name: "",
      sector: "",
      tilt: "",
    });
    navigation.navigate("HallAllRoutes");
  };

  return (
    <>
      <ButtonBack onPress={back} />
      <HeadText
        content={
          route && route.params
            ? "Update or Delete a Route."
            : "Create a new Route."
        }
      />
      <View>
        <RouteBox
          color={item.color}
          levelOfDificulty={item.level_of_difficulty}
          lineNumber={item.line_number}
          routeName={item.route_name}
          Sector={item.sector}
          Tilt={item.tilt}
        />
      </View>
      <ScrollView>
        <Text style={styles.h3}>Routename</Text>
        <CustTextInput
          text=""
          keyboardType="default" // Geändert zu einem gültigen keyboardType Wert
          user={item.route_name}
          setUser={(value) => updateField("route_name", value)}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 4, marginRight: 5 }}>
            <Text style={styles.h3}>Sektor</Text>
            <CustTextInput
              text=""
              keyboardType="default"
              user={item.sector}
              setUser={(value) => updateField("sector", value)}
            />
          </View>
          <View style={{ flex: 4, marginRight: 5 }}>
            <Text style={styles.h3}>Line</Text>
            <CustTextInput
              text=""
              keyboardType="numeric" // Angenommen, dass line_number numerisch ist
              user={item.line_number} // Konvertierung zu String, da TextInput erwartet einen String
              setUser={(value) => updateField("line_number", value)}
            />
          </View>
          <View style={{ flex: 4, marginRight: 5 }}>
            <Text style={styles.h3}>Difficulty</Text>
            <CustTextInput
              text=""
              keyboardType="default"
              user={item.level_of_difficulty}
              setUser={(value) => updateField("level_of_difficulty", value)}
            />
          </View>
        </View>

        <View>
          <Text style={styles.h3}>Color</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.box,
                  { backgroundColor: color },
                  item.color === color
                    ? {
                        borderColor: "black", // Grauer Rand für ausgewähltes Kästchen
                        borderWidth: 3,
                      }
                    : null,
                ]}
                onPress={() => updateField("color", color)}
              />
            ))}
          </View>
        </View>
        {route && route.params ? (
          <>
            <ButtonDeleteUpdate
              onPress={() => alert("Delete logic here")}
              abfrage={true}
            />
            <ButtonDeleteUpdate
              onPress={() => alert("Update logic here")}
              abfrage={false}
            />
          </>
        ) : (
          <Button onPress={onSubmit} name="Create Route" />
        )}

        <View style={{ marginBottom: 150 }} />
      </ScrollView>
    </>
  );
}
