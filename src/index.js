import { ActivityIndicator, View } from "react-native";

import AppNavigator from "./navegacion";
import { COLORES } from "./constantes/tema/colores";
import { styles } from "./styles";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    "Sora-Regular": require("../assets/fuentes/Sora-Regular.ttf"),
    "Sora-Bold": require("../assets/fuentes/Sora-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color={COLORES.secundario} size="large" />
      </View>
    );
  }
  return <AppNavigator />;
}
