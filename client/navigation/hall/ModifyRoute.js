import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import HeadText from "../../components/text/HeadText";
import ButtonBack from "../../components/buttons/ButtonBack";
import RouteBox from "../../components/sections/dashboard/climbing/RouteBox";
import CustTextInput from "../../components/input/CustTextInput";
import Button from "../../components/buttons/ButtonInsert";
import ButtonDeleteUpdate from "../../components/buttons/ButtonDeleteUpdate";
import styles from "../../components/styles/allStyles";
import { query } from "../../Controller/requestHandler";
import { Hall_Owner } from "../../Controller/Procedures";

export default function ModifyRoute({ navigation, route }) {
  const [item, setItem] = useState({
    color: "",
    level_of_difficulty: "",
    line_number: "",
    route_name: "",
    sector: "",
    tilt: false,
    hallname: "",
  });
  console.log("route :>> ", route);
  console.log("route :>> ", route && route.params);

  useEffect(() => {
    if (route && route.params) {
      setItem({
        color: route.params.color || "",
        level_of_difficulty: route.params.levelOfDifficulty || "",
        line_number: route.params.lineNumber || "",
        route_name: route.params.routeName || "",
        sector: route.params.Sector || "",
        tilt: route.params.Tilt || false,
        hallname: route.params.hallname || "",
      });
    }
  }, []);

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
    query(Hall_Owner.insert_route.call, [
      item.route_name,
      item.sector,
      item.level_of_difficulty,
      item.color,
      item.line_number,
      item.tilt,
    ])
      .then((res) => {
        alert("Erfolgreich hinzugefügt!");
        navigation.navigate("HallAllRoutes");
      })
      .catch((err) => {
        console.error("Fehler beim Einfügen der Route: ", err);
        alert("Fehler beim Einfügen der Route: " + err.message);
      });
  };

  const onDelete = () => {
    query(Hall_Owner.delete_route.call, [item.route_name])
      .then((res) => {
        alert("Route deleted! ");
        navigation.navigate("HallAllRoutes");
      })
      .catch((err) => {
        alert("Fehler beim Einfügen der Route: " + err.message);
      });
  };

  const onUpdate = () => {
    query(Hall_Owner.update_route.call, [
      item.route_name,
      item.sector,
      item.level_of_difficulty,
      item.color,
      item.line_number,
      item.tilt,
    ])
      .then((res) => {
        alert("Route updated! ");
        navigation.navigate("HallAllRoutes");
      })
      .catch((err) => {
        alert("Fehler beim Einfügen der Route: " + err.message);
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
          hallname={item.hallname}
          color={item.color}
          levelOfDifficulty={item.level_of_difficulty}
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
          keyboardType="default"
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
              keyboardType="numeric"
              user={item.line_number}
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
                        borderColor: "black",
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
            <ButtonDeleteUpdate onPress={() => onDelete()} abfrage={true} />
            <ButtonDeleteUpdate onPress={() => onUpdate()} abfrage={false} />
          </>
        ) : (
          <Button onPress={onSubmit} name="Create Route" />
        )}

        <View style={{ marginBottom: 150 }} />
      </ScrollView>
    </>
  );
}
