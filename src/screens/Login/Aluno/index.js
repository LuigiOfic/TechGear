import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native"; // Importe Keyboard
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";
import authService from "../../../service/Auth";
import styles from "./Styles"

const LoginScreen = () => {
  const [numMatricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const Login = async () => {
    try {
      await authService.loginAluno(numMatricula, senha);
      navigation.navigate("List");
    } catch (err) {
      console.error('Erro ao fazer login:', err);
    }
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navegue de volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header></Header>
        <View style={styles.main}>
          <Text style={styles.titulo}>Insira suas informações pessoais</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              onChangeText={text => setMatricula(text)}
              value={numMatricula}
              placeholder="Matricula"
              keyboardType="numeric"
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              onChangeText={(text) => setSenha(text)}
              value={senha}
              keyboardType="default"
              secureTextEntry={true}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={Login}
            >
              <Text style={styles.txtBtn}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.goBackButton}
            onPress={handleGoBack}
          >
            <Text style={styles.txtBtn}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;
