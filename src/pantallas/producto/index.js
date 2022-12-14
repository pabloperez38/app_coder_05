import { Image, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Producto = ({ navigation }) => {
  const producto = useSelector((state) => state.productos.selected);

  const { title, price, description, weight, imagen } = producto || {};
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.descripcion}>{description}</Text>
      <Text style={styles.peso}>{weight}</Text>
      <Text style={styles.precio}>Precio: ${price}</Text>
      <Image style={styles.imagen} source={{ uri: imagen }} />
    </View>
  );
};

export default Producto;
