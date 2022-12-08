import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ItemCategoria from "../../componentes/item-categoria";
import React from "react";
import { seleccionarCategoria } from "../../store/acciones";
import { styles } from "./styles";

const Categorias = ({ navigation }) => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.categoria.categorias);
  const onSelected = (item) => {
    dispatch(seleccionarCategoria(item.id));
    navigation.navigate("Productos", {
      titulo: item.title,
    });
  };
  const renderItem = ({ item }) => (
    <ItemCategoria item={item} onSelected={onSelected} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categorias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.containerList}
      />
    </SafeAreaView>
  );
};

export default Categorias;
