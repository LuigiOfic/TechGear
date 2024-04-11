import axios from "axios";
import authService from "../Auth";

const saveRegister = {
  saveDentesRetos: async (
    CirculoPrimitivo1,
    CirculoPrimitivo2,
    passo,
    folgaCabeca,
    alturaCabecaDente,
    alturaPeDente,
    alturaDente,
    circuloCabeca,
    circuloPe,
    distanciaEixos,
    circuloCabecaInterno,
    circuloPeInterno,
    distanciaEixosInterno
  ) => {
    try {
      const user = await authService.getLoggedInUser();

      const apiUrl =
        "http://192.168.37.246:8080/resultado_engrenagem_dentes_retos";
      await axios.post(apiUrl, {
        circuloPrimitivo1: CirculoPrimitivo1,
        circuloPrimitivo2: CirculoPrimitivo2,
        passo: passo,
        folgaCabeca: folgaCabeca,
        alturaCabecaDente: alturaCabecaDente,
        alturaPeDente: alturaPeDente,
        alturaDente: alturaDente,
        circuloCabeca: circuloCabeca,
        circuloPe: circuloPe,
        distanciaEixos: distanciaEixos,
        circuloCabecaInterno: circuloCabecaInterno,
        circuloPeInterno: circuloPeInterno,
        distanciaEixosInterno: distanciaEixosInterno,
        aluno: user.numMatricula,
      });
      console.log("Success!");
    } catch (error) {
      console.error("Failed!", error);
    }
  },
};

export default saveRegister;
