class coche {
  constructor(marca, tipo, color, anio) {
    this.marca = marca;
    this.tipo = tipo;
    this.color = color;
    this.anio = anio;
    this.info = `El coche es marca ${this.marca} tipo ${this.tipo}, de color ${this.color} y anio ${anio}`;
  }
  verinfo (){
    document.write(this.info + "<br>")
  }
}
let honda = new coche("Honda", "Sedan", "Blanco", 1999)
let nissan = new coche("Nissan", "Coupe", "Negro", 2001)
let toyota = new coche("Toyota", "SUV", "Gris", 2019)
/* document.write(honda.info + "<br>")
document.write(nissan.info + "<br>")
document.write(toyota.info + "<br>") */
honda.verinfo()
nissan.verinfo()
toyota.verinfo()