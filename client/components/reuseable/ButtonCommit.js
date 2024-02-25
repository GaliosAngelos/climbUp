import React from "react";
// Components
import { TouchableOpacity, View, Text } from "react-native";
// Styles
import styles from "../../components/reuseable/allStyles.js";

// ---------------------------------------------------------------

// medium sized Buttons that will appear in RouteBox etc.
export default function ButtonCommit({onPress, selected, hasSelection}) {

  const isDisabled = !hasSelection;
  
  return (
    <>
     <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDisabled ? "transparent" : "#ABABAB",
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 12,
        opacity: isDisabled ? 0.3 : 1,
       
      }}
      disabled={isDisabled} 
    >
      <Text
        style={{
          color: selected ? color : "black",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          padding: "2%",
        }}
        
      >
        Commit
      </Text>
    </TouchableOpacity>
    </>
  );
}
