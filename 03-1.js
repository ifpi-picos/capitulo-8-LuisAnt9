function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero";
    }
    return a / b;
  }
  
  function exponenciacao(base, expoente) {
    return Math.pow(base, expoente);
  }
  
  module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    exponenciacao,
  };