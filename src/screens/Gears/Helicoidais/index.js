import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Style";
import { CalculosHelicoidais } from "../../../service/SHelicoidais";

function Helicoidal() {
  const navigation = useNavigation(); // Obtenha a função de navegação

  const [modulo1, setModulo1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [anguloInclinacao, setAnguloInclinacao] = useState("");
  const [numDentes1, setNumDentes1] = useState("");
  const [numDentes2, setNumDentes2] = useState("");
  const [resultados, setResultados] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = CalculosHelicoidais(modulo1, numDentes1, anguloInclinacao, modulo2, numDentes2);
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
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header />
        <Text style={styles.titulo}>Engrenagem Helicoidal</Text>
        <View style={styles.main}>
          <View style={styles.box}>
            <View style={styles.input1}>
              <TextInput
                style={styles.input}
                placeholder="Módulo 1"
                value={modulo1}
                onChangeText={(text) => setModulo1(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Número Dentes1"
                value={numDentes1}
                onChangeText={(text) => setNumDentes1(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ângulo (B)"
                value={anguloInclinacao}
                onChangeText={(text) => setAnguloInclinacao(text)}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                style={styles.input}
                placeholder="Módulo 2"
                value={modulo2}
                onChangeText={(text) => setModulo2(text)}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Número Dentes2"
                value={numDentes2}
                onChangeText={(text) => setNumDentes2(text)}
                keyboardType="numeric"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={Calculator}>
            <Text style={styles.txtBtn}>Cálcular</Text>
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

          {Platform.OS === 'ios' && (
            <TouchableOpacity style={styles.closeKeyboardButton} onPress={dismissKeyboard}>
              <Text style={styles.txtBtn}>Fechar Teclado</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Text style={styles.txtBtn}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnRelatorio}>
          <Text style={styles.txtBtn}>Download</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default Helicoidal;
