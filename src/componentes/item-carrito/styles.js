import { COLORES } from "../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
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
  header: {
    fontFamily: "Sora-Bold",
    fontSize: 18,
    color: COLORES.texto,
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  content: { flex: 1 },
  cantidad: {
    fontFamily: "Sora-Regular",
    fontSize: 14,
    color: COLORES.texto,
    marginBottom: 5,
  },
  precio: {
    fontFamily: "Sora-Bold",
    fontSize: 14,
    color: COLORES.texto,
    marginVertical: 10,
  },
});
