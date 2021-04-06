var nameUser = "nemesis";
var password = 3321;
export var balance = 10000;

function validateUser(us = "nouser", pw = 0) {
  if (
    typeof pw.value !== "number" ||
    Math.sign(pw.value) === -1 ||
    !pw.value ||
    isNaN(pw.value)
  )
    return false;
  if (typeof us.value !== "string" || !us.value) return false;
  if (pw.value === undefined && us.value === undefined) return false;
  if (us.value == null || us.value.length == 0 || /^\s+$/.test(us.value))
    return false;

  if (us.value === nameUser && pw.value === password)
    return alert("BIENVENIDO!!!");
  return false;
}

export function login(us, pw) {
  us = prompt("Digite Usuario");
  pw = prompt("digite su contraseña");

  validateUser(us, pw);
}

//validar retiros
function withdrawals(amount) {
  if (amount > balance)
    alert(`No se puede realizar su retiro su saldo es: ${balance}`);
  return balance - amount;
}

function deposit() {
  let amount = prompt("confirme el valor a consignar");
  amount = parseInt(amount);
  let newbalance = balance + amount;
  alert(newbalance);
}

function checkbalance() {
  alert(balance);
}

export function action(option) {
  // Consignar
  if (option === "1") {
    // let amount = prompt("Digite el valor a consignar");
    return deposit();
  }

  // Retirar
  else if (option === "2") {
    let amount = prompt("Digite el valor a retirar");
    amount = parseInt(amount);
    return withdrawals(amount);
  }

  // Saldo
  else if (option === "3") {
    return checkbalance();
  } else {
    return balance;
  }
}

// export const loginto = login();
// export const actionto = action();
