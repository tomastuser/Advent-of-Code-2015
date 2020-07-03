let count = 5;
document.getElementById('app').innerHTML = `
<input type="text" value ="Enter text" id = "textInput">
    <button id="tlacitko">Click</button>
    <p id="result"></p>
`;
const result = document.getElementById('result');
const tlacitko = document.getElementById('tlacitko');
const textInput = document.getElementById('textInput');

let calculate = function () {
  let counter = 0;
  let inputed = textInput.value;
  let first = 0;
  for (let i = 0; i < inputed.length; i++) {
    const a = inputed.charAt(i);

    if (a === '(' || a === ')') {
      if (a === '(') {
        counter++;
      } else if (a === ')') {
        counter--;
      }
    } else {
      return 'spatne!';
    }
    if (counter === -1 && first === 0) {
      console.log(i + 1);
      first = i + 1;
      //return i+1;
    }
  }
  return counter + ' a ' + first;
};

tlacitko.onclick = function () {
  result.innerHTML = calculate();
};
