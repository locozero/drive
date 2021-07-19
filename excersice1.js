class cine {
constructor(nombre,clasificacion,disponibilidad) {

this.nombre = nombre;
this.clasificacion = clasificacion;
this.disponibilidad = disponibilidad;

this.info = `la pelicula ${nombre} es clasificacion ${clasificacion}`
}
verinfo(){
  document.write(this.info + "<br>")
}
}

let pelicula1 = new cine ("Anaconda", "A", "Esta Disponible")
let pelicula2 = new cine ("Rambo", "B", "No Esta Disponible")
let pelicula3 = new cine ("Anabel", "C", "Esta Disponible")

pelicula1.verinfo()
pelicula2.verinfo()
pelicula3.verinfo()
