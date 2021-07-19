class empleado {
  constructor(nombre, departamento, division, tenure) {
    this.nombre = nombre;
    this.departamento = departamento;
    this.division = division;
    this.tenure = tenure;

    this.info = `El nombre del empleado es ${this.nombre} es parte del departamento de ${this.departamento}, de la division ${this.division} y tiene ${this.tenure} anios en la empresa`;
  }
verinfo (){
document.write(this.info + "<br>")
}
}

let carlos = new empleado("Carlos", "Soporte", "Redes", 5);
let jorge = new empleado("Jorge", "Ventas", "Avon", 3);
let wilfredo = new empleado("Wilfredo", "Limpieza", "Interiores", 4);

/* document.write(carlos.info + "<br>")
document.write(jorge.info + "<br>")
document.write(wilfredo.info + "<br>")
 */

 carlos.verinfo()
 jorge.verinfo()
 wilfredo.verinfo()
