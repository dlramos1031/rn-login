import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Button, TextInput } from 'react-native-paper';
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [hidePassword, setHidePassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("eye");

  return (
    <>
       <Text>Hello</Text> 
    </>
  )
}

export default Login;