const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const math = require('mathjs');
  
  readline.question('Digite um número para calcular o logaritmo: ', numero => {
    const resultado = math.log(numero);
    console.log(`O logaritmo de ${numero} é: ${resultado}`);
    readline.close();
  });