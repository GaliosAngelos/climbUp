import React, { useState } from "react";
// Components
import { TouchableOpacity, View } from "react-native";
import CustTextInput from "./CustTextInput.js";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// ------------------------------------------------------------------

// ClimbingHallBar component, likely used for filtering or searching climbing routes
export default function RouteFilter() {
  const [filled, setFilled] = useState(false);
  const handlePress = () => {
    setFilled(!filled);
  };

  const [iconName, setIconName] = useState("sparkles-outline");

  const toggleIcon = () => {
    if (iconName === "sparkles-outline") {
      setIconName("sparkles");
    } else {
      setIconName("sparkles-outline");
    }
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 7, marginRight: 5 }}>
          <CustTextInput text={"Route"} />
        </View>
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustTextInput text={"Sektor"} />
        </View>
        <View style={{ flex: 3, marginRight: 5 }}>
          <CustTextInput text={"Level"} />
        </View>
        <View
          style={{ flex: 2, justiftyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={toggleIcon}>
            <Ionicons name={iconName} size={36} color="purple" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
