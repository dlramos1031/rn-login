import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Button, TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function Signup() {

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passCon, setPassCon] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("eye");

  // Validation checks
  const isFNameValid = fname.trim().length > 0;
  const isEmailValid = email.includes('@');
  const isPasswordValid = pass.length >= 8 && /\d/.test(pass) && /[!@#$%^&*(),.?":{}|<>]/.test(pass);
  const isPasswordMatch = pass === passCon;
  const isFormValid = isFNameValid && isEmailValid && isPasswordValid && isPasswordMatch;

  return (
    <SafeAreaView className="h-screen w-screen">
      <View className="w-full justify-center min-h-[85vh] px-6 my-6 gap-5">
        
        <Text className="text-2xl">
          Signup Page
        </Text>

        <TextInput 
          label="First Name" 
          mode="outlined" 
          value={fname} 
          onChangeText={setFName}
        />
        {!isFNameValid && (
          <Text className="text-red-600 text-xs mt-1">First name is required!</Text>
        )}

        <TextInput 
          label="Last Name" 
          mode="outlined" 
          value={lname} 
          onChangeText={setLName}
        />

        <TextInput 
          label="Email" 
          mode="outlined" 
          value={email} 
          onChangeText={setEmail}
        />
        {!isEmailValid && (
          <Text className="text-red-600 text-xs mt-1">Email address is invalid!</Text>
        )}

        <TextInput
          label="Password" 
          mode="outlined"
          value={pass}  
          secureTextEntry={hidePassword}
          right={<TextInput.Icon icon={passwordIcon} onPress={() => {
            setHidePassword(!hidePassword);
            setPasswordIcon(passwordIcon === "eye" ? "eye-off" : "eye");
          }} />}
          onChangeText={setPass}
        />
        {!isPasswordValid && (
          <Text className="text-red-600 text-xs mt-1">Password must be at least 8 characters, with at least 1 number and 1 symbol.</Text>
        )}

        <TextInput
          label="Confirm Password" 
          mode="outlined"
          value={passCon}  
          secureTextEntry={hidePassword}
          right={<TextInput.Icon icon={passwordIcon} onPress={() => {
            setHidePassword(!hidePassword);
            setPasswordIcon(passwordIcon === "eye" ? "eye-off" : "eye");
          }} />}
          onChangeText={setPassCon}
        />
        {!isPasswordMatch && (
          <Text className="text-red-600 text-xs mt-1">Passwords do not match.</Text>
        )}

        <Button 
          icon="account" 
          mode="contained" 
          disabled={!isFormValid} // Disable button if form is not valid
          className="justify-end mt-4"
          onPress={() => router.back()}
        >
          Sign up
        </Button>

        <Button 
          icon="arrow-left" 
          mode="outlined" 
          className="justify-end mt-2"
          onPress={() => router.back()}
        >
          Back to Login
        </Button>
      </View>
    </SafeAreaView>
  );
}
