import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ItemProducto = ({ item, onSelected, color }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
        <Text style={styles.titulo}>{item.title}</Text>
        <View style={styles.detalleContainer}>
          <Text style={styles.precio}>Precio: ${item.price}</Text>
          <Text style={styles.peso}>{item.weight}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemProducto;
