import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import KletternScreen from "./screens/KletternScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import RoutenScreen from "./screens/RoutenScreen";
import RoutenViewScreen from "./screens/RoutenViewScreen";
import SupportScreen from "./screens/SupportScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        {/* Weiter unten findest du die DashboardTabs! */}
        <Stack.Screen name="DashboardTabs" component={DashboardTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DashboardTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DashboardTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == "Dashboard") {
            iconName = "home-outline";
          } else if (rn == "Klettern") {
            iconName = "accessibility-outline";
          } else if (rn == "Settings") {
            iconName = "settings-outline";
          } else if (rn == "Profile") {
            iconName = "settings-outline";
          }

          return <Ionicons name={iconName} size={40} color={color} />;
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 60, // Abstand nach unten
          left: "20%", // Abstand nach links
          right: "20%", // Abstand nach rechts
          height: 60, // Höhe der Bar
          borderRadius: 40, // Abrunden aller Ecken
          // Schatteneigenschaften für iOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0, // Zentrieren des Schattens horizontal
            height: 0, // Zentrieren des Schattens vertikal
          },
          shadowOpacity: 0.25, // Transparenz des Schattens
          shadowRadius: 5, // Weichheit des Schattens
          // Schatteneigenschaften für Android
          elevation: 10,
          tabBarActiveTintColor: "green", // Farbe Icon wenn Aktiv
          tabBarInactiveTintColor: "white", // Farbe Icon wenn Inaktiv
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Klettern"
        component={KletternScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: () => "",
        }}
      />
      <Tab.Screen
        name="RoutenView"
        component={RoutenViewScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: () => "",
        }}
      />
      <Tab.Screen
        name="Routen"
        component={RoutenScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: () => "",
        }}
      />
    </Tab.Navigator>
  );
}
