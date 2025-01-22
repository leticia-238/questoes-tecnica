const string = "abcdefghijkl";
let reverseString = "";

for (let index = 1; index <= string.length; index += 1) {
  reverseString += string[string.length - index];
}

console.log(reverseString);