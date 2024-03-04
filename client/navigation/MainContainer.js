import React, { useState, useEffect } from "react";
import { Platform, Image, Keyboard } from "react-native";
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
        <Stack.Screen name="HallDashboardTabs" component={HallDashboardTabs} />
        <Stack.Screen
          name="ClimberDashboardTabs"
          component={ClimberDashboardTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ClimberDashboardTabs() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="ClimberDashboardTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => tabBarIconSelector(route, focused),
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: keyboardVisible
          ? { display: "none" }
          : tabBarStyleSelector(),
        tabBarHideOnKeyboard: true,
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
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

function HallDashboardTabs() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="HallDashboardTabs"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIconSelector(route, focused),
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: keyboardVisible
          ? { display: "none" }
          : tabBarStyleSelector(),
        tabBarHideOnKeyboard: true,
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
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

function tabBarIconSelector(route, focused) {
  let iconName;
  if (route.name === "Dashboard" || route.name === "HallDashboard") {
    iconName = focused
      ? require("../assets/home-black.png")
      : require("../assets/home-grey.png");
  } else if (route.name === "ClimbingHall" || route.name === "HallAllRoutes") {
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
}

function tabBarStyleSelector() {
  return {
    position: "absolute",
    bottom: Platform.select({ ios: 40, android: 20 }),
    left: "15%",
    right: "15%",
    height: Platform.select({ ios: 70, android: 70 }),
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: Platform.select({ ios: 28, android: 0 }),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    elevation: 10,
  };
}
