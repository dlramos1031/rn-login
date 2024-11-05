import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import "../global.css";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
