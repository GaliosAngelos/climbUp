import React, {useState} from "react";
import { View, TouchableOpacity } from "react-native";
import CustTextInput from "../../components/reuseable/CustTextInput.js";
import styles from "../../components/reuseable/allStyles.js";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ClimbingHallBar() {
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
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustTextInput text={"Route"}/>
        </View>
        <View style={{ flex: 2, marginRight: 5 }}>
          <CustTextInput text={"Sektor"}/>
        </View>
        <View style={{ flex: 2, marginRight: 5 }}>
          <CustTextInput text={"Level"} />
        </View>

        <View style={{ flex: 1, marginTop: 6}}>
        <TouchableOpacity onPress={toggleIcon}>
          <Ionicons name={iconName} size={30} color="purple" />
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
