import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("home.jsx");
      console.log(response);
      alert("Login suscefull!!!");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginCadastro = () => {
    navigation.navigate("cadastro.jsx");
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <TextInput
          style={styles.inputEmail}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></TextInput>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Login" onPress={signIn} />
        )}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("cadastro.jsx")}
        >
          Esqueceu a senha?
        </Text>
        <Text style={styles.linha}></Text>
        <TouchableOpacity
          style={styles.buttonCriar}
          onPress={handleLoginCadastro}
        >
          <Text style={styles.buttonText}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#d8d8d8",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  inputSenha: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#d8d8d8",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  buttonCriar: {
    width: "40%",
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
    textDecorationLine: "underline",
  },
  linha: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
  login: {
    width: "40%",
    borderRadius: 5,
    backgroundColor: "#dee2e6",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
    paddingVertical: 20,
  },
});

export default Login;
