let num = +prompt('Введіть число яке збираєтесь взводити у ступінь');
let degree = +prompt('Введіть ступінь у яку збираєтесь взводити число');

function pow(num, degree) {
    if (degree === 0) {
      return 1;
    }
  
    return num * pow(num, degree - 1);
  }

 let answer = pow(num, degree);
 alert(`Результат дорівнює: ${answer}`); 