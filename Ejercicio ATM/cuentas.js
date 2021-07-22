function message() {
  // these variables are not changing within the execution stack below
  const input1 = document.getElementById("typeEmailX").value;
  const input2 = document.getElementById("typePasswordX").value;

  if (input1 == usuario1.cuentanum && input2 == usuario1.pin) {
    alert("Welcome to Maya Bank Mali");
    const valor = prompt(
      "Presione 1 para Consultar saldo, Presione 2 para Ingresar Monto o presione 3 para Retirar Monto",
      ""
    );
    if (valor == 1) {
      alert("su saldo actual es: " + usuario1.saldo + " pesos");
    }

    if (valor == 2) {
      // use the Number constructor to parse the string to a number
      const depositoprompt = Number(prompt("Digite el monto a depositar"));
      
      if (Number(depositoprompt ) + usuario1.saldo >= 990) {
        alert("El monto es muy alto");
      } else {
        // this will display a message with the sum
        alert(`Nuevo saldo depositado ${depositoprompt + usuario1.saldo}`)
      }
    }

    if (valor == 3) {
      const retiroprompt = prompt("Cual es el monto que quiere retirar?");
    }
  } else if (input1 == usuario2.cuentanum && input2 == usuario2.pin) {
    alert("Welcome to Maya Bank Gera");
  } else if (input1 == usuario3.cuentanum && input2 == usuario3.pin) {
    alert("Welcome to Maya Bank Maui");
  } else {
    alert("Account does not exist");
  }
}

class banco {
  constructor(nombre, saldo, clave, cuentanum, pin) {
    this.cuentanum = cuentanum;
    this.pin = pin;
    this.nombre = nombre;
    this.clave = clave;
    this.saldo = saldo;
    this.info = `Bienvenido a Banco Maya ${this.nombre}, El saldo de su cuenta ${this.cuentanum} es $${this.saldo} dolares americanos`;
  }

  verinfo() {
    document.write(this.info + "<br>" + "<br>");
  }
}

const usuario1 = new banco("Mali", 200, "helloworld", 123456789, 111);
const usuario2 = new banco("Gera", 290, "l33t", 987654321, 222);
const usuario3 = new banco("Maui", 67, "123", 456789123, 333);

usuario1.verinfo();
