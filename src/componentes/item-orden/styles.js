import { COLORES } from "../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    backgroundColor: COLORES.terciario,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORES.primario,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 10,
  },
  headerContainer: {},
  fecha: { fontFamily: "Sora-Regular" },
  content: { flex: 1 },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  total: {
    fontFamily: "Sora-Bold",
    fontSize: 16,
    color: COLORES.texto,
    marginVertical: 10,
  },
});
