import { Categorias, Producto, Productos } from "../pantallas";

import { COLORES } from "../constantes/tema/colores";
import { Platform } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categorias"
      screenOptions={{
        headerStyle: { backgroundColor: COLORES.secundario },
        headerTintColor: COLORES.blanco,
        headerTitleStyle: { fontFamily: "Sora-Bold" },
      }}
    >
      <Stack.Screen
        name="Categorias"
        component={Categorias}
        options={{ title: "Categorías" }}
      />
      <Stack.Screen
        name="Productos"
        component={Productos}
        options={({ route }) => ({ title: route.params.titulo })}
      />
      <Stack.Screen
        name="Producto"
        component={Producto}
        options={({ route }) => ({ title: route.params.titulo })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
