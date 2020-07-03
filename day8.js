document.getElementById('app').innerHTML = `
<h1>Advent of Code</h1>
<input type="text" placeholder ="Enter text" value ="" id = "textInput">
    <button id="tlacitko">Click</button>
    <p id="result">Enter the text please</p>
`;
const result = document.getElementById('result');
const tlacitko = document.getElementById('tlacitko');
const textInput = document.getElementById('textInput');

let calculate = function () {
  //console.log(6489-5118);
  console.log(8606 - 6489);
  let inputed = textInput.value;

  const znaky = 7950 - 6489;
  let seznam = [];
  if (inputed === '') return 'prazdne';
  else {
    let slovo = '';
    let slovo2 = '';
    //slovo += inputed.charAt(0);
    for (let i = 0; i < inputed.length; i++) {
      if (inputed.charAt(i) === ' ') {
        //console.log(slovo);
        for (let j = 0; j < slovo.length; j++) {
          if (slovo.charAt(j) === '"') {
            slovo2 += '\\"';
          } else if (slovo.charAt(j) === '\\') {
            slovo2 += '\\' + '\\';
          } else {
            slovo2 += slovo.charAt(j);
          }
        }
        seznam.push(slovo2);
        slovo2 = '';
        slovo = '';
      } else {
        slovo += inputed.charAt(i);
      }
    }
    console.log(seznam);
  }
};
//result.innerHTML = " ";
tlacitko.onclick = function () {
  result.innerHTML = calculate();
};
