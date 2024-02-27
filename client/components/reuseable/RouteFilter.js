import React, { useState, useEffect } from "react";
// Components
import { TouchableOpacity, View } from "react-native";
import CustTextInput from "./CustTextInput.js";
// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import { Climber } from "./Procedures.js";
import { query } from "./generalRequest.js";
// ------------------------------------------------------------------

// ClimbingHallBar component, likely used for filtering or searching climbing routes
export default function RouteFilter({ setRoutes }) {
  const [filled, setFilled] = useState(false);
  const handlePress = () => {
    setFilled(!filled);
  };
  const [route_name, setRouteName] = useState('');
   const [sector, setSector] = useState('');
   const [level, setLevel] = useState('');
  const [iconName, setIconName] = useState("sparkles-outline");

  const [isMagic, setIsMagic] = useState(false);
  
    const toggleMagic = () => {
      setIsMagic(!isMagic);
    };

  // Funktionen, um den aktuellen Wert der Textfelder zu aktualisieren
  useEffect(() => {
    console.log("route: " + route_name);
    if (route_name) {
      query(Climber.get_routes_by_route_name.call, [route_name])
        .then(response => {
          // console.log(route_name);
          setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
        })
        .catch(err => alert("Error: " + err));
    }
  }, [route_name]); // Reagiert nur auf Änderungen von route_name
  
  useEffect(() => {
    if (sector) {
      // Angenommen, es gibt eine Abfrage für den Sektor, die hier verwendet werden soll
      query(Climber.get_routes_by_sector.call, [sector])
        .then(response => {
          setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
        })
        .catch(err => alert("Error: " + err));
    }
  }, [sector]); // Reagiert nur auf Änderungen von sector
  
  useEffect(() => {
    if (level) {
      query(Climber.get_routes_by_difficulty.call, [level])
        .then(response => {
          setRoutes(response.data); // Zustand aktualisieren, sobald Daten verfügbar sind
        })
        .catch(err => alert("Error: " + err));
    }
  }, [level]); // Reagiert nur auf Änderungen von level
  
  
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 6, marginRight: 5 }}>
          <CustTextInput 
            text="Route"
            value={route_name}
            onChangeText={setRouteName}
          />
        </View>
        <View style={{ flex: 4, marginRight: 5 }}>
          <CustTextInput 
            text="Sektor"
            value={sector}
            onChangeText={setSector}
             />
        </View>
        <View style={{ flex: 3, marginRight: 5 }}>
          <CustTextInput 
            text="Level"
            value={level}
            onChangeText={setLevel}
            />      
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
