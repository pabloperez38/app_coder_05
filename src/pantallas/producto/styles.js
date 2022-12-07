import { COLORES } from "../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORES.fondo,
  },
  titulo: {
    fontFamily: "Sora-Bold",
    fontSize: 18,
    color: COLORES.texto,
  },
  descripcion: { fontFamily: "Sora-Regular" },
  peso: { fontFamily: "Sora-Regular" },
  precio: { fontFamily: "Sora-Regular" },
  imagen: { width: 200, height: 200, marginTop: 30 },
});
