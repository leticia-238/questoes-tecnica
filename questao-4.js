const faturamento = {
  SP: 6783643,
  RJ: 3667866,
  MG: 2922988,
  ES: 2716548,
  Outros: 1984953
};

let total = 0
for (const value in faturamento) { total += faturamento[value] };
for (const value in faturamento) { 
  const porcentagem = parseInt(faturamento[value] * 100 / total);
  console.log(`${value}: ${porcentagem}%`); 
};

