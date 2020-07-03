document.getElementById('app').innerHTML = `
<h1>Advent of Code</h1>
<input type="text" placeholder ="Enter text" value ="aaa " id = "textInput">
    <button id="tlacitko">Click</button>
    <p id="result">Enter the text please</p>
`;
const result = document.getElementById('result');
const tlacitko = document.getElementById('tlacitko');
const textInput = document.getElementById('textInput');

let calculate = function () {
  let inputed = textInput.value;
  seznam = [];
  if (inputed === '') return 'prazdne';
  else {
    let slovo = '';
    let dvoj = false;
    let samo = 0;
    let spat = false;
    slovo += inputed.charAt(0);
    if (
      inputed.charAt(0) === 'a' ||
      inputed.charAt(0) === 'e' ||
      inputed.charAt(0) === 'i' ||
      inputed.charAt(0) === 'o' ||
      inputed.charAt(0) === 'u'
    ) {
      samo++;
    }
    for (let i = 1; i < inputed.length; i++) {
      if (inputed.charAt(i) === ' ') {
        if (dvoj && samo > 2 && !spat) {
          seznam.push(slovo);
        }
        slovo = '';
        dvoj = false;
        samo = 0;
        spat = false;
      } else {
        slovo += inputed.charAt(i);

        if (inputed.charAt(i) === inputed.charAt(i - 1)) {
          dvoj = true;
        }
        if (
          inputed.charAt(i) === 'a' ||
          inputed.charAt(i) === 'e' ||
          inputed.charAt(i) === 'i' ||
          inputed.charAt(i) === 'o' ||
          inputed.charAt(i) === 'u'
        ) {
          samo++;
        }
        if (inputed.charAt(i) === 'b' && inputed.charAt(i - 1) === 'a') {
          spat = true;
        } else if (inputed.charAt(i) === 'd' && inputed.charAt(i - 1) === 'c') {
          spat = true;
        } else if (inputed.charAt(i) === 'q' && inputed.charAt(i - 1) === 'p') {
          spat = true;
        } else if (inputed.charAt(i) === 'y' && inputed.charAt(i - 1) === 'x') {
          spat = true;
        }
        //console.log(slovo, dvoj, samo, spat);
      }
    }
    console.log(seznam.length);
  }
};
//result.innerHTML = " ";
tlacitko.onclick = function () {
  result.innerHTML = calculate();
};
