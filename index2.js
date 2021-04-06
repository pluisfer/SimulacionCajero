import { action } from "./build/module/component.js";
import { login } from "./build/module/component.js";
import { balance } from "./build/module/component.js";

function run() {
  login();

  var option = prompt("1 => Consignar, 2 => Retirar, 3 => Consultar saldo: ");

  if (option === "0" || option > "3") {
    alert(`Favor digite una opccion entre 1 y 3, ${balance}`);
  } else {
    alert(`Acción realizada correctamente, saldo:, ${balance}`);
    action(option);
  }
}

run();
