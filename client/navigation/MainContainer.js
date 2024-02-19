import React from "react";
import { Platform, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import KletternScreen from "./screens/ClimbingHallScreen";
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

          if (route.name === "Dashboard") {
            iconName = focused ? require('../assets/home-black.png') : require('../assets/home-grey.png');
          } else if (route.name === "ClimbingHall") {
            iconName = focused ? require('../assets/shoe-black.png') : require('../assets/shoe-grey.png');
          } else if (route.name === "Settings") {
            iconName = focused ? require('../assets/menu-black.png') : require('../assets/menu-grey.png');
          }

          return <Image source={iconName} style={{width: 40, height: 40}} resizeMode="contain" />;
        },
        tabBarActiveTintColor: "green", // Farbe Icon wenn Aktiv
        tabBarInactiveTintColor: "grey", // Farbe Icon wenn Inaktiv
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.select({ ios: 40, android: 0 }), // Positionierung am unteren Rand des Bildschirms
          left: "15%",
          right: "15%",
          height: Platform.select({ ios: 70, android: 70 }), // Erhöhen Sie die Höhe der Navigationsleiste
          backgroundColor: "white", // Hintergrundfarbe hinzufügen, um die Navigationsleiste zu visualisieren
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingTop: 28,

          // Schatteneigenschaften für iOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0, // Zentrieren des Schattens horizontal
            height: 0, // Zentrieren des Schattens vertikal
          },
          shadowOpacity: 0.30, // Transparenz des Schattens
          shadowRadius: 7, // Weichheit des Schattens
          elevation: 10, // Schatteneigenschaften für Android
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="ClimbingHall"
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
