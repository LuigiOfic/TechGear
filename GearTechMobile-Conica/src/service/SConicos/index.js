// projetoUtils.js

export const Calculos = (modulo1, numeroDentes1, modulo2, numeroDentes2) => {
  if (!modulo1 || !numeroDentes1 || !modulo2 || !numeroDentes2) {
    return null;
  }
  
  const moduloNum1 = parseFloat(modulo1);
  const moduloNum2 = parseFloat(modulo2);

  const numeroDentesNum1 = parseInt(numeroDentes1);
  const numeroDentesNum2 = parseInt(numeroDentes2);


  //Cálculos

  const CirculoPrimitivo1 = moduloNum1 * numeroDentesNum1;
  const CirculoPrimitivo2 = moduloNum2 * numeroDentesNum2;
  
    return {
      CirculoPrimitivo1: CirculoPrimitivo1.toFixed(3),
      CirculoPrimitivo2: CirculoPrimitivo2.toFixed(3),
    };
  };
  