import React, { useState } from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "../styles/allStyles";

export default function RouteLogFilterButtons({ setSelectedTimeframe }) {
  const [selectedButton, setSelectedButton] = useState();
  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
    if (setSelectedTimeframe) {
      setSelectedTimeframe(buttonId);
    }
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress("lastDay")}
            style={[
              styles.buttonlarge,
              selectedButton === "lastDay" && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === "lastDay"
                  ? { color: "white" }
                  : { color: "black" },
              ]}
            >
              last Day
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress("lastWeek")}
            style={[
              styles.buttonlarge,
              selectedButton === "lastWeek" && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === "lastWeek"
                  ? { color: "white" }
                  : { color: "black" },
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
            onPress={() => handleButtonPress("lastMonth")}
            style={[
              styles.buttonlarge,
              selectedButton === "lastMonth" && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === "lastMonth"
                  ? { color: "white" }
                  : { color: "black" },
              ]}
            >
              last Month
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => handleButtonPress("lastYear")}
            style={[
              styles.buttonlarge,
              selectedButton === "lastYear" && styles.selectedButton,
              { width: 140 },
            ]}
          >
            <Text
              style={[
                styles.buttonlargetext,
                selectedButton === "lastYear"
                  ? { color: "white" }
                  : { color: "black" },
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
