import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import DashboardScreen from "./screens/DashboardScreen";
import KletternScreen from "./screens/KletternScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Screen Names
const dashboardName = "Dashboard";
const kletternName = "Klettern";
const settingsName = "Settings";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={dashboardName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn == dashboardName) {
              iconName = "home-outline";
            } else if (rn == kletternName) {
              iconName = "list-outline";
            } else if (rn == settingsName) {
              iconName = "settings-outline";
            } else if (rn == profileName) {
              iconName = "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={dashboardName} component={DashboardScreen} />
        <Tab.Screen name={kletternName} component={KletternScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
