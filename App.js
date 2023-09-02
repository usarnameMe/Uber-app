import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";

import AuthNavigator from "./src/Navigators/AuthNavigator";
import { UserProvider } from "./src/UserProvider";
import { BasketProvider } from "./src/screens/BasketContext";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
export default function App() {
  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("./assets/fonts/UberMove-Bold.ttf"),
    "Uber-Medium": require("./assets/fonts/UberMove-Medium.ttf"),
    "Uber-Regular": require("./assets/fonts/UberMove-Regular.ttf"),
    "Uber-Light": require("./assets/fonts/UberMove-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <BasketProvider>
        <PaperProvider>
          <AuthNavigator onLayout={onLayoutRootView} />
        </PaperProvider>
      </BasketProvider>
    </UserProvider>
  );
}
