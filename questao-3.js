const { readFileSync } = require('fs');

const file = JSON.parse(readFileSync('./faturamento.json', 'utf8'));
let min = max = soma = file[0].faturamento;
 
for (let index = 1; index < file.length; index += 1) {
  const { faturamento } = file[index];
  if(faturamento < min) { min = faturamento };
  if(faturamento > max) { max = faturamento };
  soma += faturamento;
}

const media = soma / file.length;
const dias = file.filter(({ faturamento }) => faturamento > media).length;

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi ${min}
  O maior valor de faturamento ocorrido em um dia do mês foi ${max}
  Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${dias}`
);
