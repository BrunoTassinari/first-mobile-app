import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { Product } from "./src/pages";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": Montserrat_400Regular,
    "Montserrat-Bold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Product />
    </SafeAreaView>
  );
}
