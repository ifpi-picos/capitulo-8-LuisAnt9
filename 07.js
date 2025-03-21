const convert = require('convert-units');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite o número de dias para converter em minutos: ', dias => {
  const minutos = convert(Number(dias)).from('d').to('min');
  console.log(`${dias} dias equivalem a ${minutos} minutos.`);

  readline.question('Digite o número de gigabytes para converter em bytes: ', gigabytes => {
    const bytes = convert(Number(gigabytes)).from('GB').to('B');
    console.log(`${gigabytes} gigabytes equivalem a ${bytes} bytes.`);
    readline.close();
  });
});