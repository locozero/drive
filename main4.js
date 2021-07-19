class alumno {
  constructor(nombre, apellido, calificacion, incrito) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.calificacion = calificacion;
    this.incrito = incrito;
    this.info = `El alumno ${this.nombre} apellido ${this.apellido} ha tenido una calificacion de ${calificacion} por lo que esta ${this.incrito} para el siguiente curso`;

  }
  aprobado() {
    if (this.calificacion >= 7.5) {
      return "Aprobado" 
    } else if (this.calificacion < 7.5) {
      return "Reprobado" 
    } else {
      return "Error en el sistema de aprobacion"
    }
  }

  inscrit() {
    if (this.incrito === true) {
      return "inscrito" 
    } else if (this.incrito === false) {
      return "No Incrito"
    } else {
      return "Error de inscripcion"
    }
  }
}

const est1 = new alumno ("Carlos", "Arevalo", 7.4, false)
const est2 = new alumno ("Jorge", "Castillo", 7.5, true)
const est3 = new alumno ("miguel", "avalos", 9, true)

console.log(est1.nombre, est1.apellido,est1.aprobado(),est1.inscrit())
console.log(est2.nombre, est2.apellido,est2.aprobado(),est2.inscrit())


/* console.log(est1.info)
console.log(est2.info)
console.log(est3.info) */