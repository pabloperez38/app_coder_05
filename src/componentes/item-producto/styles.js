import { COLORES } from "../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    height: 100,
  },
  item: { flex: 1, justifyContent: "space-around" },
  titulo: { fontFamily: "Sora-Bold", fontSize: 18, color: COLORES.texto },
  detalleContainer: { flexDirection: "row", justifyContent: "space-between" },
  precio: { fontFamily: "Sora-Bold", fontSize: 14, color: COLORES.texto },
  peso: { fontFamily: "Sora-Regular", color: COLORES.texto },
});
