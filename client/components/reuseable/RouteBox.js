// Importing necessary components and libraries
import React, { useState } from "react";
// Components
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  Modal,
} from "react-native";
import ButtonMedium from "../../components/reuseable/ButtonMedium";
// Style
import styles from "../../components/reuseable/allStyles.js";

// --------------------------------------------------------------------

// Route component representing a climbing route in a climbing hall.
// It allows users to track their progress on the route (success, failure, number of attempts).

export default function Route({
  routeName,
  Sector,
  levelOfDificulty,
  color,
  lineNumber,
}) {
  // State hooks for expanding the view and tracking attempts count
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Touchable component to expand or collapse route details */}
      <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
        <View style={expanded ? styles.borderBoxExtended : styles.borderBox}>
          {/* Route information display */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3, justifyContent: "center" }}>
              <Text style={styles.h3}>{routeName}</Text>
              <Text style={styles.text}>
                Sektor {Sector}, Line {lineNumber}
              </Text>
            </View>

            {/* Display of route's difficulty level */}
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  {
                    color: color,
                    textAlign: "left",
                    fontSize: 50,
                    fontWeight: "bold",
                    paddingLeft: 10,
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
            <View style={[{ flex: 1 }]}>
              <ButtonMedium text={"Made it."} />
            </View>
            <View style={[{ flex: 1 }]}>
              <ButtonMedium text={"Failed."} />
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
            <TouchableOpacity
              onPress={() => count > 0 && setCount((c) => c - 1)}
            >
              <Text
                style={[styles.h1, { color: count > 0 ? "black" : "gray" }]}
              >
                -
              </Text>
            </TouchableOpacity>

            <Text style={[styles.h1, { paddingHorizontal: 50 }]}>{count}</Text>

            <TouchableOpacity onPress={() => setCount((c) => c + 1)}>
              <Text style={styles.h1}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Button to commit the tracked data */}
          <View style={{ justifyContent: "center" }}>
            <ButtonMedium
              onPress={sendData()}
              style={styles.buttonlarge}
              text="Commit"
            />
          </View>
        </View>
      )}
    </>
  );
}
