import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModo = () => {
    setModoEscuro((prevModo) => !prevModo);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const gradientColors = modoEscuro
    ? ["#000022", "#000022", "rgb(0, 119, 255)"]
    : ["white", "white", "rgb(0, 119, 255)"];
  const textColor = modoEscuro ? "#fff" : "#333";

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.boxLogo}>
        <Image style={styles.logo} source={require("./src/img/Logo.png")} />
      </View>
      <View style={styles.container}>
        <Text style={{ color: textColor }}>
          Open up App.js to start working on your app!
        </Text>
        <TouchableOpacity onPress={alternarModo} style={styles.botaoModo}>
          <Text style={{ color: "#fff" }}>Alternar Modo</Text>
        </TouchableOpacity>
        <View style={styles.login}>
          <TextInput
            style={styles.inputEmail}
            placeholder="User"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttonEntrar} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("NovaPagina")}
          >
            Esqueceu a senha?
          </Text>
          <Text style={styles.linha}></Text>
          <TouchableOpacity style={styles.buttonCriar} onPress={handleLogin}>
            <Text style={styles.buttonText}>Criar nova conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxLogo: {
    justifyContent: Platform.OS === "web" ? "flex-start" : "center",
    alignItems: Platform.OS === "web" ? "flex-start" : "center",
  },
  logo: {
    width: 150,
    height: 75,
    resizeMode: "stretch",
    position: Platform.OS === "web" ? "absolute" : "relative",
    top: Platform.OS === "web" ? 0 : undefined,
    left: Platform.OS === "web" ? 0 : undefined,
  },
  botaoModo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#4285f4", // Cor de fundo do botão
    borderRadius: 5,
  },
  inputEmail: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#d8d8d8",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  inputSenha: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#d8d8d8",
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonEntrar: {
    width: 80,
    height: 40,
    backgroundColor: "#3a86ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonCriar: {
    width: 160,
    height: 40,
    backgroundColor: "#38b000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    color: "blue",
    textDecorationLine: "none",
  },
  login: {
    width: 300,
    height: 340,
    borderRadius: 5,
    backgroundColor: "#dee2e6",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
    position: Platform.OS === "web" ? "absolute" : "relative",
    left: Platform.OS === "web" ? 0 : undefined,
  },
  linha: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: 250,
    marginTop: 10,
  },
});
