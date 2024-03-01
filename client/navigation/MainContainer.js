import React from "react";
import { Platform, Image } from "react-native";
// Navigation + Icons
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// Components
import LoginScreen from "./LoginScreen";
import DashboardScreen from "./DashboardScreen";
import SettingsScreen from "./SettingsScreen";
import ClimbingHallScreen from "./ClimbingHallScreen";
import RegistrationScreen from "./RegistrationScreen";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import RoutenScreen from "./RoutenScreen";
import HallDashboardScreen from "./hall/HallDashboardScreen";
import HallAllRoutes from "./hall/HallAllRoutes";
import ModifyRoute from "./hall/ModifyRoute";

// ---------------------------------------------------------

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ---------------------------------------------------------

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        {/* Weiter unten findest du die DashboardTabs! */}
        {/* {userType === "hallOwner" ? (
          <> */}
        <Stack.Screen name="HallDashboardTabs" component={HallDashboardTabs} />
        {/* </>
        ) : (
          <> */}
        <Stack.Screen
          name="ClimberDashboardTabs"
          component={ClimberDashboardTabs}
        />
        {/* </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function ClimberDashboardTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ClimberDashboardTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused
              ? require("../assets/home-black.png")
              : require("../assets/home-grey.png");
          } else if (route.name === "ClimbingHall") {
            iconName = focused
              ? require("../assets/shoe-black.png")
              : require("../assets/shoe-grey.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("../assets/menu-black.png")
              : require("../assets/menu-grey.png");
          }

          return (
            <Image
              source={iconName}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: "green", // Farbe Icon wenn Aktiv
        tabBarInactiveTintColor: "grey", // Farbe Icon wenn Inaktiv
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.select({ ios: 40, android: 20 }), // Positionierung am unteren Rand des Bildschirms
          left: "15%",
          right: "15%",
          height: Platform.select({ ios: 70, android: 70 }), // Erhöhen Sie die Höhe der Navigationsleiste
          backgroundColor: "white", // Hintergrundfarbe hinzufügen, um die Navigationsleiste zu visualisieren
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingTop: Platform.select({ ios: 28, android: 0 }),
          // Schatteneigenschaften für iOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0, // Zentrieren des Schattens horizontal
            height: 0, // Zentrieren des Schattens vertikal
          },
          shadowOpacity: 0.3, // Transparenz des Schattens
          shadowRadius: 7, // Weichheit des Schattens
          elevation: 10, // Schatteneigenschaften für Android
        },
        tabBarHideOnKeyboard: true, // Ersetzt keyboardHidesTabBar für neuere Versionen
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="ClimbingHall"
        component={ClimbingHallScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
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

function HallDashboardTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HallDashboardTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HallDashboard") {
            iconName = focused
              ? require("../assets/home-black.png")
              : require("../assets/home-grey.png");
          } else if (route.name === "HallAllRoutes") {
            iconName = focused
              ? require("../assets/shoe-black.png")
              : require("../assets/shoe-grey.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("../assets/menu-black.png")
              : require("../assets/menu-grey.png");
          }

          return (
            <Image
              source={iconName}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: "green", // Farbe Icon wenn Aktiv
        tabBarInactiveTintColor: "grey", // Farbe Icon wenn Inaktiv
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.select({ ios: 40, android: 20 }), // Positionierung am unteren Rand des Bildschirms
          left: "15%",
          right: "15%",
          height: Platform.select({ ios: 70, android: 70 }), // Erhöhen Sie die Höhe der Navigationsleiste
          backgroundColor: "white", // Hintergrundfarbe hinzufügen, um die Navigationsleiste zu visualisieren
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingTop: Platform.select({ ios: 28, android: 0 }),
          // Schatteneigenschaften für iOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0, // Zentrieren des Schattens horizontal
            height: 0, // Zentrieren des Schattens vertikal
          },
          shadowOpacity: 0.3, // Transparenz des Schattens
          shadowRadius: 7, // Weichheit des Schattens
          elevation: 10, // Schatteneigenschaften für Android
        },
        tabBarHideOnKeyboard: true, // Ersetzt keyboardHidesTabBar für neuere Versionen
      })}
    >
      <Tab.Screen
        name="HallDashboard"
        component={HallDashboardScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="HallAllRoutes"
        component={HallAllRoutes}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarShowLabel: false, headerShown: false }}
      />
      <Tab.Screen
        name="ModifyRoute"
        component={ModifyRoute}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarButton: () => "",
        }}
      />
    </Tab.Navigator>
  );
}
