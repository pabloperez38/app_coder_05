import { COLORES } from "../constantes/tema/colores";
import CarritoNavigator from "./carrito";
import { Ionicons } from "@expo/vector-icons";
import OrdenesNavigator from "./ordenes";
import React from "react";
import ShopNavigator from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Sora-Regular",
          fontSize: 12,
        },
        tabBarActiveTintColor: COLORES.texto,
        tabBarInactiveTintColor: COLORES.secundario,
        tabBarStyle: { height: 60, paddingBottom: 5 },
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={COLORES.secundario}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CarritoTab"
        component={CarritoNavigator}
        options={{
          title: "Carrito",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={28}
              color={COLORES.secundario}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdenesTab"
        component={OrdenesNavigator}
        options={{
          title: "Ordenes",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "list-circle" : "list-circle-outline"}
              size={28}
              color={COLORES.secundario}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
