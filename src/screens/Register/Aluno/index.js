// src/screens/Register/Aluno/index.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard} from "react-native";
import { useNavigation} from "@react-navigation/native";
import styles from "./Styles"
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";
import authRegister from "../../../service/AuthRegister";

const RegisterScreenAluno = () => {
  const [nomeAlunos, setNomeAlunos] = useState("");
  const [numMatricula, setNumMatricula] = useState("");
  const [emailEdu, setEmailEdu] = useState("");
  const [senha, setSenha] = useState("");
  const [turma, setTurma] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const criarAlunos = async () => {
    try {
      await authRegister.registerAluno(nomeAlunos, numMatricula, emailEdu, turma, senha);
      navigation.navigate('LoginAluno')
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
              value={nomeAlunos}
              placeholder="Nome e Sobrenome"
              onChangeText={(text) => setNomeAlunos(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={numMatricula}
              placeholder="Número da Matrícula"
              onChangeText={(text) => setNumMatricula(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={turma}
              placeholder="Turma"
              onChangeText={(text) => setTurma(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={emailEdu}
              placeholder="Email Educacional"
              onChangeText={(text) => setEmailEdu(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={senha}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmarSenha(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={criarAlunos}
            >
              <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default RegisterScreenAluno;
