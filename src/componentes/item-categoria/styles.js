import { COLORES } from "../../constantes/tema/colores";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 110,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: { fontFamily: "Sora-Bold", fontSize: 16, color: COLORES.texto },
});
