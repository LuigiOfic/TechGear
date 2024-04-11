import axios from "axios";

const authRegister = {
  registerAluno: async (nomeAlunos, numMatricula, emailEdu, turma, senha) => {
    const apiUrlA = "http://192.168.37.246:8080/aluno";
    axios
      .post(apiUrlA, {
        nome: nomeAlunos,
        numMatricula: numMatricula,
        email: emailEdu,
        turma: turma,
        senha: senha,
      })
      .then(() => {
        console.log("Cadastro efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar aluno:", error);
      });
  },
  registerProfessor: async (nome, nif, email, senha) => {
    const apiUrlP = "http://192.168.37.246:8080/professor";
    axios
      .post(apiUrlP, {
        nome: nome,
        nif: nif,
        email: email,
        senha: senha,
      })
      .then(() => {
        console.log("Cadastro efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar professor:", error);
      });
  },
};

export default authRegister;
