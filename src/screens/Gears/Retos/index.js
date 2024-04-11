import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import styles from "./styles";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Calculos } from "../../../service/SDentesRetos";

const DentesRetos = () => {
  const navigation = useNavigation(); // Obtenha a função de navegação

  const [modulo1, setModulo1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [numeroDentes1, setNumeroDentes1] = useState("");
  const [numeroDentes2, setNumeroDentes2] = useState("");
  const [resultados, setResultados] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = Calculos(modulo1, numeroDentes1, modulo2, numeroDentes2);
    console.log(resultadosCalculo);
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
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.linear}
          colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
        >
          <Header />
          <Text style={styles.titulo}>Dentes Retos</Text>
          <View style={styles.main}>
            <View style={styles.box}>
              <View style={styles.input1}>
                <TextInput
                  style={styles.input}
                  placeholder="Módulo 1"
                  keyboardType="numeric"
                  value={modulo1}
                  onChangeText={(text) => setModulo1(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Número Dentes1"
                  keyboardType="numeric"
                  value={numeroDentes1}
                  onChangeText={(text) => setNumeroDentes1(text)}
                />
              </View>
              <View style={styles.input2}>
                <TextInput
                  style={styles.input}
                  placeholder="Módulo 2"
                  keyboardType="numeric"
                  value={modulo2}
                  onChangeText={(text) => setModulo2(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Número Dentes2"
                  keyboardType="numeric"
                  value={numeroDentes2}
                  onChangeText={(text) => setNumeroDentes2(text)}
                />
              </View>
            </View>
            <TouchableOpacity onPress={Calculator} style={styles.button}>
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
            <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
              <Text style={styles.txtBtn}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnRelatorio}>
            <Text style={styles.txtBtn}>Download</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DentesRetos;
