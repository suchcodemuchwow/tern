import {
  AuthenticatedNavigatorStackParamList,
  MainNavigatorTabParamList,
} from "./AuthenticatedNavigator.types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Home } from "src/screens";
import { Profile } from "src/screens/authenticated/Profile";
import React from "react";
import { Explore } from "../screens/authenticated/Explore";
import { Notification } from "../screens/authenticated/Notification";
import { createStackNavigator } from "@react-navigation/stack";
import { Box, Heading, Input } from "native-base";

const Tab = createBottomTabNavigator<MainNavigatorTabParamList>();
const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { display: "none" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size + 6} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="magnify"
              color={color}
              size={size + 6}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell-outline"
              color={color}
              size={size + 6}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size + 6}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ModalScreen() {
  return (
    <Box w="full" h="full">
      <Input placeholder="Enter text"></Input>
    </Box>
  );
}

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Settings" component={ModalScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="NewPost" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
