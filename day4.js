document.getElementById('app').innerHTML = `
<h1>Advent of Code</h1>
<input type="text" placeholder ="Enter text" value ="ckczppom" id = "textInput">
    <button id="tlacitko">Click</button>
    <p id="result">Enter the text please</p>
`;
const result = document.getElementById('result');
const tlacitko = document.getElementById('tlacitko');
const textInput = document.getElementById('textInput');

let calculate = function () {
  let inputed = textInput.value;
  if (inputed === '') return 'prazdne';
  else {
    seznam = [];
    for (let i = 2000000; i < 6000000; i++) {
      let cislo = String(i);
      let inputed2 = inputed + cislo;
      let vystup = md5(inputed2);
      let prvni = vystup.slice(0, 6);
      if (prvni === '000000') {
        seznam.push(inputed2);
        break;
      }
    }
    console.log(seznam);

    return seznam;
  }
};
//result.innerHTML = " ";
tlacitko.onclick = function () {
  result.innerHTML = calculate();
};
