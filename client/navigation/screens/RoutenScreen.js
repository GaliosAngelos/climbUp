import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RouteBox from "../../components/reuseable/RouteBox";
import styles from "../../components/reuseable/allStyles.js";
import routes from "../../_mock/routes.js";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../../components/reuseable/BackButton.js";
import CustTextInput from "../../components/reuseable/CustTextInput.js";

export default function RoutenScreen({ navigation, route }) {
  const { hall_name } = route.params;
  console.log("hall_name :>> ", hall_name);

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
      <View style={styles.head}>
        <View style={{ flexDirection: "row" }}>
          
          <View style={{ flex: 2, justiftyContent:"center"}}>
          <BackButton prevScreen={"Klettern"} />
          {/* <TouchableOpacity onPress={handlePress}>
            <Ionicons
              name={filled ? "heart" : "heart-outline"}
              size={38}
              color={filled ? "red" : "black"}
            />
          </TouchableOpacity> */}
        </View>
        <View style={{ flex: 4 }}>
            <Text style={[styles.h1, {textAlign: "right"}]}>{hall_name}</Text>
          </View>
        </View>
      </View>
      
        

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 4, marginRight: 5 }}>
            <CustTextInput text={"Route"} />
          </View>
          <View style={{ flex: 2, marginRight: 5 }}>
            <CustTextInput text={"Sektor"} />
          </View>
          <View style={{ flex: 2, marginRight: 5 }}>
            <CustTextInput text={"Level"} />
          </View>
          <View style={{ flex: 1, justiftyContent:"center", alignItems:"center" }}>
            <TouchableOpacity onPress={toggleIcon}>
              <Ionicons name={iconName} size={40} color="purple" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          {routes.map((item, index) => (
            <RouteBox
              key={index}
              routeName={item.routeName}
              Sector={item.Sector}
              levelOfDificulty={item.LevelOfDifficulty}
              color={item.color}
              lineNumber={item.lineNumber}
              navigation={navigation}
            />
          ))}
        </View>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </>
  );
}
