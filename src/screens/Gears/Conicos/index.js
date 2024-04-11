import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";
import { Calculos } from "../../../service/SConicos";
import styles from "./styles";

const Conicos = ({ navigation }) => {
  const [modulo1, setModulo1] = useState("");
  const [numeroDentes1, setNumeroDentes1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [numeroDentes2, setNumeroDentes2] = useState("");
  const [AnguloPrimitivoCones1, setAnguloPrimitivoCones1] = useState("");
  const [AnguloPrimitivoCones2, setAnguloPrimitivoCones2] = useState("");
  const [resultado, setResultado] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = Calculos(
      modulo1,
      numeroDentes1,
      AnguloPrimitivoCones1,
      modulo2,
      numeroDentes2,
      AnguloPrimitivoCones2
    );
    if (resultadosCalculo) {
      setResultado(resultadosCalculo);
    } else {
      setResultado("Por favor, preencha todos os campos com valores válidos.");
    }

    // Dismiss the keyboard
    Keyboard.dismiss();
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={dismissKeyboard} style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header />
        <Text style={styles.titulo}>Engrenagem Cônica</Text>
        <View style={styles.main}>
          <View style={styles.box}>
            <View style={styles.input1}>
              <TextInput
                style={styles.input}
                placeholder="Módulo 1"
                onChangeText={setModulo1}
                value={modulo1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Número Dentes1"
                onChangeText={setNumeroDentes1}
                value={numeroDentes1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ângulo Primitivo"
                onChangeText={setAnguloPrimitivoCones1}
                value={AnguloPrimitivoCones1}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.input2}>
              <TextInput
                style={styles.input}
                placeholder="Módulo 2"
                onChangeText={setModulo2}
                value={modulo2}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Número Dentes2"
                onChangeText={setNumeroDentes2}
                value={numeroDentes2}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ângulo Primitivo"
                onChangeText={setAnguloPrimitivoCones2}
                value={AnguloPrimitivoCones2}
                keyboardType="numeric"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={Calculator}>
            <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableOpacity>

          {resultado && (
            <View style={styles.resultContainer}>
              {Object.entries(resultado).map(([key, value]) => (
                <Text key={key} style={styles.resultText}>{`${key}: ${value}`}</Text>
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
    </TouchableOpacity>
  );
};

export default Conicos;
