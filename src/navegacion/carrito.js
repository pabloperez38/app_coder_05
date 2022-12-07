import { COLORES } from "../constantes/tema/colores";
import { Carrito } from "../pantallas";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CarritoNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={{
        headerStyle: { backgroundColor: COLORES.secundario },
        headerTintColor: COLORES.blanco,
        headerTitleStyle: { fontFamily: "Sora-Bold" },
      }}
    >
      <Stack.Screen name="Carrito" component={Carrito} />
    </Stack.Navigator>
  );
};

export default CarritoNavigator;
