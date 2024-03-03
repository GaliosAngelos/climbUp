// Importing necessary components and libraries
import React, { useState, useEffect } from "react";
// Components
import { TouchableWithoutFeedback, View, Text } from "react-native";
import ButtonMedium from "../../../buttons/ButtonMedium";
import ButtonCommit from "../../../buttons/ButtonCommit";
// Style
import styles from "../../../styles/allStyles";
import { useNavigation } from "@react-navigation/native";
import { Climber } from "../../../../Controller/Procedures";
import { query } from "../../../../Controller/requestHandler";
// --------------------------------------------------------------------

// Route component representing a climbing route in a climbing hall.
// It allows users to track their progress on the route (success, failure, number of attempts).

export default function Route({
  hallname,
  color,
  levelOfDificulty,
  lineNumber,
  routeName,
  Sector,
  Tilt,
  expanded,
  setExpanded,
}) {
  // State hooks for expanding the view and tracking attempts count
  const [rest, setRest] = useState(0);
  const [reachedTop, setReachedTop] = useState(null);
  const navigation = useNavigation();

  const handleButtonPress = (buttonId) => {
    setReachedTop(buttonId);
  };
  const isSelectionMade = reachedTop !== null;

    useEffect(() => {
      // insert Route into statistic table
        query(Climber.insert_user_statistic.call, [hallname, reachedTop, levelOfDificulty, rest, (reachedTop ? true : false)])
        .then((res) => {
          if (res.status === 400) {
            alert("Error setting route progress. Query missing: " + JSON.stringify(res.data));
          } else if (res.status === 401) {
            alert("Not logged in : " + JSON.stringify(res.data));
          } else  if (res.status === 500) {
            alert("Error setting route progress: " + JSON.stringify(res.data));
          } else {
            confirm("Route progress saved. Awesome!");
            setExpanded(false);
          }
        })
      .catch((err) => {
        console.log("An unknwon error occured. ", err);
        alert("Saving route progress failed. ");
      });

  }, [reachedTop]);

  const handlePress = () => {
    if (setExpanded) {
      setExpanded();
    } else {
      navigation.navigate("ModifyRoute", {
        color: color,
        levelOfDificulty: levelOfDificulty,
        lineNumber: lineNumber,
        routeName: routeName,
        Sector: Sector,
        Tilt: Tilt,
      });
    }
  };

  return (
    <>
      {/* Touchable component to expand or collapse route details */}
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
          {/* Route information display */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3, justifyContent: "center" }}>
              <Text style={styles.h3}>{routeName}</Text>
              <Text style={styles.text}>
                {/* tried this @nico  */}
                Sektor {Sector}, Line {lineNumber}, Tilt:{" "}
                {Tilt == true ? "yes" : "no"}
              </Text>
            </View>

            {/* Display of route's difficulty level */}
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={[
                  {
                    color: color,
                    textAlign: "left",
                    fontSize: 47,
                    fontWeight: "bold",
                    paddingLeft: 10,
                    marginVertical: -10,
                  },
                ]}
              >
                {levelOfDificulty}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {/* Expanded view to track route completion and attempts */}
      {expanded && (
        <View style={styles.routeExtension}>
          {/* Buttons for marking the route as 'made' or 'failed' */}

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <ButtonMedium
                text={"Completed!"}
                color={"#8FD78F"}
                onPress={() => handleButtonPress(1)}
                selected={reachedTop === true}
              />
            </View>
            <View style={{ flex: 1 }}>
              <ButtonMedium
                text={"Next Time!"}
                color={"#F5BBBA"}
                onPress={() => handleButtonPress(2)}
                selected={reachedTop === false}
              />
            </View>
          </View>

          {/* Counter for tracking the number of attempts */}
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

          {/* Button to commit the tracked data */}
          <ButtonCommit text="Commit" hasSelection={isSelectionMade} />
        </View>
      )}
    </>
  );
}
