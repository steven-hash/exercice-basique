//pyramide de Mario
let pyr = prompt ("combien de pyramide voulez-vous?");

function Pyramid(n) {
  for (var i = 0; i < n;i++) {
      var str = '';
      for (var k = 1; k <= (i+1); k++) {
          str = str + '#';
      }
      console.log(str);
  }
}
Pyramid(pyr);