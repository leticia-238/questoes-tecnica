let num = 9;
let firstNumber = secondNumber = currentNumber = 1;

while (currentNumber <= num) {
  currentNumber = firstNumber + secondNumber;
  firstNumber = secondNumber;
  secondNumber = currentNumber;
};

if (num == firstNumber) {
  console.log(`O número ${num} pertence a sequência de fibonacci`);
} else {
  console.log(`O número ${num} não pertence a sequência de fibonacci`);
};