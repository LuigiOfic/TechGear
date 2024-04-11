// src/screens/Register/Professor/index.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";
import authRegister from "../../../service/AuthRegister";
import styles from "./Styles";

const RegisterScreenProfessor = () => {
  const [nome, setNome] = useState("");
  const [nif, setNif] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const criarProfessor = async () => {
    try {
      await authRegister.registerProfessor(nome, nif, email, senha);
      navigation.navigate('LoginProfessor')
    }catch (err) {
      console.error('Erro ao cadastrar: ', err)
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header></Header>
        <View style={styles.main}>
          <Text style={styles.text}>Informe suas informações</Text>
          <Text style={styles.text}>pessoais</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              value={nome}
              placeholder="Nome e Sobrenome"
              onChangeText={(text) => setNome(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={nif}
              placeholder="NIF"
              onChangeText={(text) => setNif(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={senha}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmarSenha(text)}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={criarProfessor}
            >
              <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default RegisterScreenProfessor;
