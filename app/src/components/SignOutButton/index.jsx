import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

export default function SignOutButton() {
  const router = useRouter();
  return (
    <Button 
        style={{paddingHorizontal: 8, paddingVertical: 4, backgroundColor: "#d3d3d3"}} 
        mode="contained" 
        onPress={() => router.replace("Login")}>
      <Text style={{color: "black", fontSize: 20}}>Sign Out</Text>
    </Button>
  );
}