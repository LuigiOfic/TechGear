import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Platform } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Calculos as CalculosTransmissao } from "../../../service/STransmissao";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

function Transmissao() {
  const navigation = useNavigation(); // Obtenha a função de navegação

  const [quantidadeEngrenagens, setQuantidadeEngrenagens] = useState("");
  const [numerosDentes, setNumerosDentes] = useState([]);
  const [resultados, setResultados] = useState(null);
  const [mostrarInputEngrenagens, setMostrarInputEngrenagens] = useState(true);
  const [mostrarBotaoSalvar, setMostrarBotaoSalvar] = useState(true);

  const handleQuantidadeEngrenagensChange = (text) => {
    setQuantidadeEngrenagens(text);
    // Reiniciar os números de dentes quando o usuário mudar a quantidade de engrenagens
    setNumerosDentes([]);
  };

  const handleNumeroDentesChange = (index, value) => {
    const newNumerosDentes = [...numerosDentes];
    newNumerosDentes[index] = value;
    setNumerosDentes(newNumerosDentes);
  };

  const handleSalvarQuantidadeEngrenagens = () => {
    if (quantidadeEngrenagens) {
      // Criar um array vazio para armazenar os números de dentes para cada engrenagem
      const newNumerosDentes = Array(parseInt(quantidadeEngrenagens)).fill("");
      setNumerosDentes(newNumerosDentes);
      setMostrarInputEngrenagens(false); // Ocultar o input de engrenagens após salvar a quantidade
      setMostrarBotaoSalvar(false); // Ocultar o botão "Salvar" após salvar a quantidade
    } else {
      alert("Por favor, insira a quantidade de engrenagens antes de salvar.");
    }
  };

  const renderInputsNumeroDentes = () => {
    return numerosDentes.map((numeroDentes, index) => (
      <TextInput
        key={index}
        style={styles.input}
        placeholder={`Número de Dentes Engrenagem ${index + 1}`}
        value={numeroDentes}
        onChangeText={(text) => handleNumeroDentesChange(index, text)}
        keyboardType="numeric"
      />
    ));
  };

  const Calculator = () => {
    const resultadosCalculo = CalculosTransmissao(numerosDentes);
    if (resultadosCalculo) {
      setResultados(resultadosCalculo);
    } else {
      alert("Por favor, preencha todos os campos com valores válidos.");
    }
    Keyboard.dismiss();
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleGoBack = () => {
    navigation.goBack(); // Navegue de volta para a tela anterior
  };

  return (
    <TouchableOpacity onPress={dismissKeyboard} style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header />
        <Text style={styles.titulo}>Transmissões</Text>
        <View style={styles.main}>
          <View style={styles.box}>
            {mostrarInputEngrenagens && (
              <TextInput
                style={styles.input}
                placeholder="Quantidade de Engrenagens"
                value={quantidadeEngrenagens}
                onChangeText={handleQuantidadeEngrenagensChange}
                keyboardType="numeric"
              />
            )}
            {mostrarBotaoSalvar && (
              <TouchableOpacity style={styles.Salvar} onPress={handleSalvarQuantidadeEngrenagens}>
                <Text style={styles.txtBtn}>Salvar</Text>
              </TouchableOpacity>
            )}
            {renderInputsNumeroDentes()}
          </View>
          <TouchableOpacity style={styles.button} onPress={Calculator}>
            <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableOpacity>
          {resultados && (
            <View style={styles.resultContainer}>
              {Object.entries(resultados).map(([key, value]) => (
                <Text
                  key={key}
                  style={styles.resultText}
                >{`${key}: ${value}`}</Text>
              ))}
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.btnRelatorio}>
          <Text style={styles.txtBtn}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Text style={styles.txtBtn}>Voltar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default Transmissao;
