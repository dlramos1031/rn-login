import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import "../global.css";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
