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

  const [isMagic, setIsMagic] = useState(false);
  
    const toggleMagic = () => {
      setIsMagic(!isMagic);
    };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 6, marginRight: 5 }}>
          <CustTextInput text={"Route"} />
        </View>
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustTextInput text={"Sektor"} />
        </View>
        <View style={{ flex: 3, marginRight: 5 }}>
          <CustTextInput text={"Level"} />
        </View>
        <View style={{margin: 4}}>
          <TouchableOpacity onPress={toggleMagic}>
          <Ionicons
                  name={isMagic ? 'sparkles' : 'sparkles-outline'}
                  size={36}
                  color={isMagic ? '#B000B1' : '#B167B1'}
                />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
