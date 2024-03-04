
export default function RouteLogFilterButtons({ onSelectedButtonChange }) {
  const [selectedButton, setSelectedButton] = useState();

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
    // Rufen Sie die Callback-Funktion auf, die als Prop übergeben wurde
    if (onSelectedButtonChange) {
      onSelectedButtonChange(buttonId);
    }
  };


import React, { useState } from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "../styles/allStyles";

// -----------------------------------------------------------------------

export default function RouteLogFilterButtons() {
  const [selectedButton, setSelectedButton] = useState();

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress(1)}
            style={[
              styles.buttonlarge,
              selectedButton === 1 && styles.selectedButton,
              { width: 140 },
            ]}
            
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === 1 ? { color: "white" } : { color: "black" },
              ]}
            >
              last Day
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress(2)}
            style={[
              styles.buttonlarge,
              selectedButton === 2 && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === 2 ? { color: "white" } : { color: "black" },
              ]}
            >
              last Week
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress(3)}
            style={[
              styles.buttonlarge,
              selectedButton === 3 && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === 3 ? { color: "white" } : { color: "black" },
              ]}
            >
              last Month
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress(4)}
            style={[
              styles.buttonlarge,
              selectedButton === 4 && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === 4 ? { color: "white" } : { color: "black" },
              ]}
            >
              last Year
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
