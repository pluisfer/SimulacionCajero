/* function Bmi(weight, height) {
  return weight / height ** 2;
}

console.log("Tu IMC es: " + Bmi(105, 1.71));
 */
/* 
var fs = require("fs");

fs.readFile("contenido.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});
 */

// verificador si archivo existe
/* var fs = require("fs");

fs.stat("nuevo.txt", function (err) {
  if (err == null) {
    console.log("El archivo existe");
  } else if (err.code == "ENOENT") {
    console.log("el archivo no existe");
  } else {
    console.log(err); // ocurrió algún error
  }
});
 */

// funcion constructora

/* var Persona = function (nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
};

Persona.prototype.saluda = function () {
  return "Hola " + this.nombre;
};

var pedro = new Persona("Pedro", "Perez");
console.log(pedro.saluda()); // imprime "Hola Pedro" */

//método a los arreglos

Array.prototype.sum = function () {
  var total = 0;

  for (var i = 0; i < this.length; i++) {
    total += this[i];
  }

  return total;
};

[1, 2, 3].sum(); // retorna 6
