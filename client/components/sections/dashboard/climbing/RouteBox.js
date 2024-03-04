import React, { useState } from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import ButtonMedium from "../../../buttons/ButtonMedium";
import ButtonCommit from "../../../buttons/ButtonCommit";
import styles from "../../../styles/allStyles";
import { useNavigation } from "@react-navigation/native";
import { Climber } from "../../../../Controller/Procedures";
import { query } from "../../../../Controller/requestHandler";
import { Alert } from "react-native";
import getColor from "../../../input/Colors";

export default function Route({
  hallname,
  color,
  levelOfDifficulty,
  lineNumber,
  routeName,
  Sector,
  Tilt,
  expanded,
  setExpanded,
}) {
  const [rest, setRest] = useState(0);
  const [reachedTop, setReachedTop] = useState(null);
  const navigation = useNavigation();

  const commitProgress = () => {
    query(Climber.insert_user_statistic.call, [
      hallname,
      routeName,
      levelOfDifficulty,
      rest,
      reachedTop,
    ])
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          Alert.alert("Success", "Route progress saved. Awesome! ");
          setExpanded(false);
          setRest(0); // Zurücksetzen des Zustands für Pausen
          setReachedTop(null); // Zurücksetzen der Auswahl
        } else {
          alert("Error setting route progress: " + JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        console.log("An unknown error occurred. ", err);
        alert("Saving route progress failed.");
      });
  };

  const handlePress = () => {
    if (setExpanded) {
      setExpanded(!expanded);
    } else {
      navigation.navigate("ModifyRoute", {
        color: color,
        levelOfDifficulty: levelOfDifficulty,
        lineNumber: lineNumber,
        routeName: routeName,
        Sector: Sector,
        Tilt: Tilt,
      });
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3, justifyContent: "center" }}>
              <Text style={styles.h3}>{routeName}</Text>
              <Text style={styles.text}>
                Sektor {Sector}, Line {lineNumber}, Tilt: {Tilt ? "yes" : "no"}
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={[
                  { color: getColor(color) },
                  styles.text,
                  {
                    textAlign: "left",
                    fontSize: 32,
                    fontWeight: "bold",
                    paddingLeft: 10,
                    marginVertical: -10,
                  },
                ]}
              >
              {levelOfDifficulty}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {expanded && (
        <View style={styles.routeExtension}>
          <View style={{ flexDirection: "row" }}>
            <ButtonMedium
              text={"Completed!"}
              color={"#8FD78F"}
              onPress={() => setReachedTop(true)}
              selected={reachedTop === true}
            />
            <ButtonMedium
              text={"Next Time!"}
              color={"#F5BBBA"}
              onPress={() => setReachedTop(false)}
              selected={reachedTop === false}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 20,
            }}
          >
            <ButtonMedium
              onPress={() => rest > 0 && setRest((c) => c - 1)}
              text={"-"}
            />
            <View style={{ justifyContent: "center", width: 60 }}>
              <Text style={[styles.h1, { textAlign: "center" }]}>{rest}</Text>
            </View>
            <ButtonMedium
              onPress={() => rest < 100 && setRest((c) => c + 1)}
              text={"+"}
            />
          </View>
          <ButtonCommit
            text="Commit"
            onPress={commitProgress}
            hasSelection={reachedTop !== null}
          />
        </View>
      )}
    </>
  );
}
