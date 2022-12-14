import React, { useEffect } from "react";
import { productosFiltrados, seleccionarProducto } from "../../store/acciones";
import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { ItemProducto } from "../../componentes";
import { styles } from "./styles";

const Productos = ({ navigation }) => {
  const categoria = useSelector((state) => state.categoria.selected);
  const productoFiltrado = useSelector(
    (state) => state.productos.productosFiltrados
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productosFiltrados(categoria.id));
  }, []);

  const onSelected = (item) => {
    dispatch(seleccionarProducto(item.id));
    navigation.navigate("Producto", {
      titulo: item.title,
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
