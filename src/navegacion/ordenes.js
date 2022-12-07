import { COLORES } from "../constantes/tema/colores";
import { Ordenes } from "../pantallas";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrdenesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ordenes"
      screenOptions={{
        headerStyle: { backgroundColor: COLORES.secundario },
        headerTintColor: COLORES.blanco,
        headerTitleStyle: { fontFamily: "Sora-Bold" },
      }}
    >
      <Stack.Screen name="Ordenes" component={Ordenes} />
    </Stack.Navigator>
  );
};

export default OrdenesNavigator;
