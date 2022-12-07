import { COLORES } from "../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORES.fondo,
  },
  listContainer: { flex: 1 },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORES.primario,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  botonConfirmar: {
    backgroundColor: COLORES.primario,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },
  textoBotonConfirmar: {
    fontFamily: "Sora-Regular",
    fontSize: 16,
    color: COLORES.blanco,
  },
  totalContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textoTotal: {
    fontFamily: "Sora-Regular",
    fontSize: 16,
    color: COLORES.blanco,
  },
  montoTotal: { fontFamily: "Sora-Bold", fontSize: 16, color: COLORES.blanco },
});
