var input1 = prompt("Digite su numero de cuenta");
var input2 = prompt("Digite su numero de PIN");

function aprobadocuenta() {
  if (input1 == usuario1.cuentanum && input2 == usuario1.pin) {
    console.log("Welcome to Maya Bank Mali");
  } else if (input1 == 222 && input2 == 333) {
    console.log("Welcome to Maya Bank Gera");
  } else if (input1 == 333 && input2 == 444) {
    console.log("Welcome to Maya Bank Maui");
  } else {
    ("Account does not exist");
  }
}

class banco {
  constructor(nombre, saldo, clave, cuentanum, pin) {
    this.cuentanum = cuentanum;
    this.pin = pin;
    this.nombre = nombre;
    this.clave = clave;
    this.saldo = saldo;
    this.info = `Bienvenido a Banco Maya ${this.nombre}, El saldo de su cuenta ${cuentanum} es $${saldo} dolares americanos`;
  }

  verinfo() {
    document.write(this.info + "<br>" + "<br>");
  }
}

const usuario1 = new banco("Mali", "2000", "helloworld", 123456789, 111);
const usuario2 = new banco("Gera", "1540", "l33t", 987654321, 222);
const usuario3 = new banco("Maui", "245", "123", 456789123, 333);

usuario1.verinfo();
usuario2.verinfo();
usuario3.verinfo();
aprobadocuenta();
