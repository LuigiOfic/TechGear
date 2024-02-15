import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig"; // Assuming you have auth and db from FirebaseConfig
import { addDoc, collection, getDocs } from "firebase/firestore";

const auth = FIREBASE_AUTH;

const db = FIREBASE_DB;

const userCollectionRef = collection(db, "users");

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [turma, setTurma] = useState("");
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [])

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = await addDoc(userCollectionRef, {
        nome, email, turma, matricula
      })
      navigation.navigate("login.jsx");
      console.log(response, user);
      alert("User created successfully!");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Turma"
        value={turma}
        onChange={(e) => setTurma(e.target.value)}
      />
      <TextInput
        style={styles.input}
        placeholder="matricula"
        value={matricula}
        onChange={(e) => setMatricula(e.target.value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Cadastre-se" onPress={signUp} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "40%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: "40%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Cadastro;
