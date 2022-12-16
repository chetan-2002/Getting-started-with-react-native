import React from "react";
import DrawerNavigator from "./routes/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  ArchitectsDaughter_400Regular,
  useFonts,
} from "@expo-google-fonts/architects-daughter";

export default function App() {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
