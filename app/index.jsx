import { View, Text } from "react-native";
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import {Button, TextInput } from 'react-native-paper';
import { Link, router } from 'expo-router';

export default function Index() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("eye");

  return (
    <SafeAreaView className="h-screen w-screen">
      <View className="w-full justify-center min-h-[85vh] px-6 my-6 gap-5">
        
        <Text className="text-5xl my-20 text-center leading-relaxed font-serif">Dave Ramos' Login App</Text>

        <Text className="text-2xl">
          Login Page
        </Text>

        <TextInput 
        label="Email" 
        mode="outlined" 
        value={email} 
        onChangeText={email => setEmail(email)}/>

        <TextInput
        label="Password" 
        mode="outlined"
        value={pass}  
        secureTextEntry={hidePassword}
        right={<TextInput.Icon icon={passwordIcon} onPress={() => {
          setHidePassword(!hidePassword);
          setPasswordIcon(passwordIcon == "eye" ? "eye-off" : "eye");
        }}/>} 
        onChangeText={pass => setPass(pass)}/>

        <Link href="/Signup" className="text-lg text-right">Forgot password?</Link>

        <Button 
        icon="login" 
        mode="contained" 
        className="mt-10"
        onPress={() => console.log("Email address: " + email + "\nPassword: " + pass)}>
          Log in
        </Button>
        
        <Text className="text-lg text-center">--- Or ---</Text>

        <Button 
        icon="account" 
        mode="outlined" 
        className={`justify-end`}
        onPress={() => router.push('/Signup')}>
          Sign up
        </Button>
      </View>
    </SafeAreaView>
  );
}
