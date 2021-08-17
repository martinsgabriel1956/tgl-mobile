import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";

import colors from "../utils/colors";

import { RecentGames } from "../screens/RecentGames";
import { NewBet } from "../screens/NewBet";
import { Account } from "../screens/Account";

import { NewBetButton } from "../components/UI/NewBetButton";

const Tabs = createBottomTabNavigator();

export function BetTabRoutes() {
  return (
    <Tabs.Navigator
      initialRouteName="Games"
      tabBarOptions={{
        style: {
          margin: 0,
          height: 90,
          paddingTop: 10,
          opacity: 0.8,
          backgroundColor: "#fff",
          overflow: "visible",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        
        activeTintColor: colors.primary,
        labelStyle: {
          fontWeight: "bold",
          fontSize: 12,
          fontStyle: "italic",
          color: colors.title,
          paddingBottom: 20
        }
      }}
    >
      <Tabs.Screen
        name="Games"
        component={RecentGames}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="NewBet"
        component={NewBet}
        options={{
          tabBarLabel: "",
          tabBarAccessibilityLabel: "NewBet",
          tabBarIcon: ({ color }) => (
            <NewBetButton />
          ),
        }}
      />

      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarAccessibilityLabel: "NewBet",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
