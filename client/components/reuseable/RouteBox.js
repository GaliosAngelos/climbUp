// Importing necessary components and libraries
import React, { useState } from "react";
// Components
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import ButtonMedium from "../../components/reuseable/ButtonMedium";
import ButtonCommit from "../../components/reuseable/ButtonCommit";


// Style
import styles from "../../components/reuseable/allStyles.js";

// --------------------------------------------------------------------

// Route component representing a climbing route in a climbing hall.
// It allows users to track their progress on the route (success, failure, number of attempts).

export default function Route({
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
    const [count, setCount] = useState(0);

    const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };
  const isSelectionMade = selectedButton !== null;

  return (
    <>
      {/* Touchable component to expand or collapse route details */}
      <TouchableWithoutFeedback onPress= {setExpanded}>
        <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
          {/* Route information display */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3, justifyContent: "center" }}>
              <Text style={styles.h3}>{routeName}</Text>
              <Text style={styles.text}>
                {/* tried this @nico  */}
                Sektor {Sector}, Line {lineNumber}, Tilt: {Tilt == true ? "yes" : "no"}
              </Text>
            </View>

            {/* Display of route's difficulty level */}
            <View style={{ flex: 1 , justifyContent: "center"}}>
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
          selected={selectedButton === 1}
        />
      </View>
      <View style={{ flex: 1 }}>
        <ButtonMedium 
          text={"Next Time!"} 
          color={"#F5BBBA"} 
          onPress={() => handleButtonPress(2)}
          selected={selectedButton === 2}
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
              onPress={() => count > 0 && setCount((c) => c - 1)}
              text={"-"}
/>
            <View style={{justifyContent:"center",width: 60}}>
            <Text style={[styles.h1, {textAlign: "center"}]}>{count}</Text>
            </View>

            <ButtonMedium
            onPress={() => count < 100 && setCount((c) => c + 1)}
            text={"+"}/>
          </View>

          {/* Button to commit the tracked data */}
            <ButtonCommit
              text="Commit"
              hasSelection={isSelectionMade}
            />
          </View>
      )}
    </>
  );
}
