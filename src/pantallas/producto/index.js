import { Image, Text, View } from "react-native";

import { PRODUCTOS } from "../../constantes/datos";
import React from "react";
import { styles } from "./styles";

const Producto = ({ navigation, route }) => {
  const { productoId } = route.params;

  const productoFiltrado = PRODUCTOS.find(
    (producto) => producto.id === productoId
  );
  const { title, price, description, weight, imagen } = productoFiltrado || {};
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
