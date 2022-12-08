import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { ItemProducto } from "../../componentes/item-producto";
import { productosFiltrados } from "../../store/acciones";
import { styles } from "./styles";

const Productos = ({ navigation }) => {
  const categoria = useSelector((state) => state.categoria.selected);
  const productoFiltrado = useSelector(
    (state) => state.productos.productoFiltrado
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productosFiltrados(categoria.id));
  }, []);
  console.warn("categoria", categoria.id);
  const onSelected = (item) => {
    navigation.navigate("Producto", {
      titulo: item.title,
      productoId: item.id,
    });
  };
  const renderItem = ({ item }) => (
    <ItemProducto item={item} onSelected={onSelected} color={categoria.color} />
  );
  return (
    <FlatList
      data={productoFiltrado}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

export default Productos;
