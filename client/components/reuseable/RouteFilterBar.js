import React from "react";
import { View } from "react-native";
import CustTextInput from "../../components/reuseable/CustTextInput.js";
import styles from "../../components/reuseable/allStyles.js";


export default function ClimbingHallBar() {
    const [showIcon, setShowIcon] = React.useState(false);
  
    // Function to toggle the password visibility state
    const toggleShowIcon = () => {
      setShowIcon(!showIcon);
    };
  
    return (
      <>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 4 }}>
            <CustTextInput text={"Route"} keyboardType={"default"} />
          </View>
          <View style={{ flex: 2 }}>
            <CustTextInput text={"Sektor"} keyboardType={"default"} />
          </View>
          <View style={{ flex: 2 }}>
            <CustTextInput text={"Level"} keyboardType={"number-pad"} />
          </View>
  
          <View style={{ flex: 1 }} />
          {/* Placeholder für den Recommendation Button (Zauberstab) */}
        </View>
      </>
    );
  }