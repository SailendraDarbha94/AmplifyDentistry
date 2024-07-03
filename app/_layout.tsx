import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app, { auth } from "@/firebaseConfig";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, auth]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {user ? (
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      ) : (
        <Stack>
          <Stack.Screen name="(auth)/index" options={{ headerShown: true, headerTitle: "Create Account" }} />
          <Stack.Screen name="test-view/index" options={{ headerShown: true, headerTitle: "Text AI" }} />
          <Stack.Screen name="(test)/index" options={{ headerShown: true, headerTitle: "Text" }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="text-view" />
        </Stack>
      )}
    </ThemeProvider>
  );
}
