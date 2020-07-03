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
  slabiky = [];
  if (inputed === '') return 'prazdne';
  else {
    let slovo = '';
    let pres = 0;
    let stej = 0;
    for (let i = 0; i < inputed.length; i++) {
      if (inputed.charAt(i) === ' ') {
        for (let j = 0; j < slovo.length; j++) {
          if (j > 1) {
            if (slovo.charAt(j) === slovo.charAt(j - 2)) {
              pres++;
            }
          }
          if (j > 0) {
            let sl = slovo.charAt(j - 1) + slovo.charAt(j);
            slabiky.push(sl);
          }
        }
        for (let j = 0; j < slabiky.length; j++) {
          for (let z = 0; z < slabiky.length; z++) {
            if (z === 0) {
              if (j !== z && j !== z + 1) {
                if (slabiky[j] === slabiky[z]) {
                  stej++;
                }
              }
            } else if (z === slabiky.length - 1) {
              if (j !== z && j !== z - 1) {
                if (slabiky[j] === slabiky[z]) {
                  stej++;
                }
              }
            } else {
              if (j !== z && j !== z - 1 && j !== z + 1) {
                if (slabiky[j] === slabiky[z]) {
                  stej++;
                }
              }
            }
          }
        }
        if (stej > 0 && pres > 0) {
          seznam.push(slovo);
        }
        //console.log(slabiky, pres, stej);
        slovo = '';
        slabiky = [];
        stej = 0;
        pres = 0;
      } else {
        slovo += inputed.charAt(i);
      }

      //console.log(slovo, dvoj, samo, spat);
    }
    console.log(seznam.length);
  }
};
//result.innerHTML = " ";
tlacitko.onclick = function () {
  result.innerHTML = calculate();
};
