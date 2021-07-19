class animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.information = `Soy ${this.especie}, tengo ${this.edad} anos y soy de color ${this.color}`;
    }
    verinfo(){
      document.write(this.information + "<br>");
    }
}

let perro = new animal("perro", 5, "marron")
let gato = new animal("gato", 2, "negro")
let pajaro = new animal("pajaro", 1, "verde")
let perico = new animal("perico", 3, "rojo")


/* document.write(perro.information + "<br>")
document.write(gato.information + "<br>")
document.write(pajaro.information + "<br>") */
perico.verinfo();
perro.verinfo();
gato.verinfo();
pajaro.verinfo();

