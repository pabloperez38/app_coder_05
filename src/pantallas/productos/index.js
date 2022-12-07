import { Button, FlatList, Text, View } from "react-native";

import { COLORES } from "../../constantes/tema/colores";
import ItemProducto from "../../componentes/item-producto";
import { PRODUCTOS } from "../../constantes/datos";
import React from "react";
import { styles } from "./styles";

const Productos = ({ navigation, route }) => {
  const { categoriaId, titulo, color } = route.params;

  const productosFiltrados = PRODUCTOS.filter(
    (producto) => producto.categoryId === categoriaId
  );
  const onSelected = (item) => {
    navigation.navigate("Producto", {
      titulo: item.title,
      productoId: item.id,
    });
  };
  const renderItem = ({ item }) => (
    <ItemProducto item={item} onSelected={onSelected} color={color} />
  );
  return (
    <FlatList
      data={productosFiltrados}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Productos;
