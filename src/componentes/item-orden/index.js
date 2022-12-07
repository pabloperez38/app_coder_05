import { Text, TouchableOpacity, View } from "react-native";

import { COLORES } from "../../constantes/tema/colores";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { formatoFecha } from "../../utiles/funciones";
import { styles } from "./styles";

const ItemOrden = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.fecha}>{formatoFecha(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.total}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={onDelete(item.id)}>
          <Ionicons name="trash" size={24} color={COLORES.secundario} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemOrden;
