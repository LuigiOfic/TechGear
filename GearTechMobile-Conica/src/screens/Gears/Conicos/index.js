import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";
import { Calculos } from "../../../service/SConicos";

const Conicos = () => {
  const [modulo1, setModulo1] = useState("");
  const [numeroDentes1, setNumeroDentes1] = useState("");

  const [modulo2, setModulo2] = useState("");
  const [numeroDentes2, setNumeroDentes2] = useState("");

  const [AnguloPrimitivoCones1, setAnguloPrimitivoCones1] = useState("");
  const [AnguloPrimitivoCones2, setAnguloPrimitivoCones2] = useState("");

  const [AnguloConeCabeca1, setAnguloConeCabeca1] = useState("");
  const [AnguloConeCabeca2, setAnguloConeCabeca2] = useState("");

  const [resultado, setResultado] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = Calculos(modulo1, numeroDentes1, modulo2, numeroDentes2);
    if (resultadosCalculo) {
      setResultado(resultadosCalculo);
    } else {
      setResultado("Por favor, preencha todos os campos com valores válidos.");
    }
  };

  return (
    <View style={styles.container}>
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
                placeholder="Número de Dentes 1"
                onChangeText={setNumeroDentes1}
                value={numeroDentes1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ângulo Primitivo Cones 1"
                onChangeText={setAnguloPrimitivoCones1}
                value={AnguloPrimitivoCones1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ângulo Cone Cabeça 1"
                onChangeText={setAnguloConeCabeca1}
                value={AnguloConeCabeca1}
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
                placeholder="Número de Dentes 2"
                onChangeText={setNumeroDentes2}
                value={numeroDentes2}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Ângulo Primitivo Cones 2"
                onChangeText={setAnguloPrimitivoCones2}
                value={AnguloPrimitivoCones2}
                keyboardType="numeric"
              />
                            <TextInput
                style={styles.input}
                placeholder="Ângulo Cone Cabeça 2"
                onChangeText={setAnguloConeCabeca2}
                value={AnguloConeCabeca2}
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
                <Text
                  key={key}
                  style={styles.resultText}
                >{`${key}: ${value}`}</Text>
              ))}
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.btnRelatorio}>
          <Text style={styles.txtBtn}>Relatório</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Conicos;
