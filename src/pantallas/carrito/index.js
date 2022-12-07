import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { CARRITO } from "../../constantes/datos/carrito";
import { ItemCarrito } from "../../componentes";
import { styles } from "./styles";

const Carrito = ({ navigation }) => {
  const total = 1000;
  const onDelete = (id) => {
    //console.warn("Delete", id);
  };
  const renderItem = ({ item }) => (
    <ItemCarrito item={item} onDelete={onDelete} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={CARRITO}
          renderItem={renderItem}
          style={styles.listContainer}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.botonConfirmar} onPress={() => null}>
          <Text style={styles.textoBotonConfirmar}>Confirmar</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.textoTotal}>Total</Text>
            <Text style={styles.montoTotal}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carrito;
