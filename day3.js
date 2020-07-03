document.getElementById('app').innerHTML = `
<h1>Advent of Code</h1>
<input type="text" placeholder ="Enter text" value =">>>>>>" id = "textInput">
    <button id="tlacitko">Click</button>
    <p id="result">Enter the text please</p>
`;
const result = document.getElementById('result');
const tlacitko = document.getElementById('tlacitko');
const textInput = document.getElementById('textInput');

function Dum(_a, _b, _darky) {
  this.a = _a;
  this.b = _b;
  this.darky = _darky;
}
let calculate = function () {
  let inputed = textInput.value;
  let x = 0;
  let y = 0;
  let xB = 0;
  let yB = 0;
  let domy = [];
  let maxX = 5;
  let minX = -5;
  let maxY = 5;
  let minY = -5;
  //domy.push(new Dum(x, y, 1));
  for (let i = -5; i < 6; i++) {
    for (let j = -5; j < 6; j++) {
      domy.push(new Dum(j, i, 0));
    }
  }
  for (let i = 0; i < domy.length; i++) {
    if (domy[i].a === 0 && domy[i].b === 0) {
      domy[i].darky++;
    }
  }
  // console.log(domy);
  if (inputed === '') return 'prazdne';
  else {
    for (let i = 0; i < inputed.length - 1; i += 2) {
      const a = inputed.charAt(i);
      if (a === '>') {
        x++;
      } else if (a === '<') {
        x--;
      } else if (a === '^') {
        y++;
      } else if (a === 'v') {
        y--;
      } else {
        return 'spatne!';
      }
      if (x <= maxX && x >= minX && y <= maxY && y >= minY) {
        for (let j = 0; j < domy.length; j++) {
          if (domy[j].a === x && domy[j].b === y) {
            domy[j].darky++;
          }
        }
      }
      if (x === maxX) {
        // console.log('zvetsujeme');
        for (let j = minY; j < maxY + 1; j++) {
          domy.push(new Dum(maxX + 1, j, 0));
        }
        maxX++;
      } else if (y === maxY) {
        for (let j = minX; j < maxX + 1; j++) {
          domy.push(new Dum(j, maxY + 1, 0));
        }
        maxY++;
      } else if (y === minY) {
        for (let j = minX; j < maxX + 1; j++) {
          domy.push(new Dum(j, minY - 1, 0));
        }
        minY--;
      } else if (x === minX) {
        for (let j = minY; j < maxY + 1; j++) {
          domy.push(new Dum(minX - 1, j, 0));
        }
        minX--;
      }
    }
    for (let i = 1; i < inputed.length; i += 2) {
      const a = inputed.charAt(i);
      if (a === '>') {
        xB++;
      } else if (a === '<') {
        xB--;
      } else if (a === '^') {
        yB++;
      } else if (a === 'v') {
        yB--;
      } else {
        return 'spatne!';
      }
      if (xB <= maxX && xB >= minX && yB <= maxY && yB >= minY) {
        for (let j = 0; j < domy.length; j++) {
          if (domy[j].a === xB && domy[j].b === yB) {
            domy[j].darky++;
          }
        }
      }
      if (xB === maxX) {
        // console.log('zvetsujeme');
        for (let j = minY; j < maxY + 1; j++) {
          domy.push(new Dum(maxX + 1, j, 0));
        }
        maxX++;
      } else if (yB === maxY) {
        for (let j = minX; j < maxX + 1; j++) {
          domy.push(new Dum(j, maxY + 1, 0));
        }
        maxY++;
      } else if (yB === minY) {
        for (let j = minX; j < maxX + 1; j++) {
          domy.push(new Dum(j, minY - 1, 0));
        }
        minY--;
      } else if (xB === minX) {
        for (let j = minY; j < maxY + 1; j++) {
          domy.push(new Dum(minX - 1, j, 0));
        }
        minX--;
      }
    }
    let counter = 0;
    for (let j = 0; j < domy.length; j++) {
      if (domy[j].darky > 0) {
        //console.log(domy[j]);
        counter++;
      }
    }
    console.log(x + ', ' + y, xB + ', ' + yB);
    return counter;
  }
};
//result.innerHTML = " ";
tlacitko.onclick = function () {
  result.innerHTML = calculate();
};
