import { Text, TouchableOpacity, View } from "react-native";

import { COLORES } from "../../constantes/tema/colores";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { styles } from "./styles";

const ItemCarrito = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.cantidad}>Cantidad: {item.quantity}</Text>
          <Text style={styles.precio}>Precio: ${item.price}</Text>
        </View>
        <TouchableOpacity onPress={onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={COLORES.secundario} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCarrito;
