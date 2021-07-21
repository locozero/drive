function message() {
  var input1 = document.getElementById("typeEmailX").value;
  var input2 = document.getElementById("typePasswordX").value;
  
    if (input1 == usuario1.cuentanum && input2 == usuario1.pin) {
      alert("Welcome to Maya Bank Mali");
      window.location.href = "Welcome.html"
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