import { FlatList, Text, View } from "react-native";

import { ItemOrden } from "../../componentes";
import { ORDENES } from "../../constantes/datos/ordenes";
import { styles } from "./styles";

const Ordenes = ({ navigation }) => {
  const onDelete = (id) => {
    //console.warn("id", id);
  };
  const renderItem = ({ item }) => (
    <ItemOrden item={item} onDelete={onDelete} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ORDENES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Ordenes;
