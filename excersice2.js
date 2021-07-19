class XboXcatalogo {
  constructor(consola, videjuego, disponibilidad, precio) {

    this.consola = consola;
    this.videjuego = videjuego;
    this.disponibilidad = disponibilidad;
    this.precio = precio;

  /*   this.info = `Juego ${videjuego} para consola ${this.consola} por el momento ${disponibilidad} a un precio de ${precio} pesos` */
  }

  disponible() {
  if (this.disponibilidad == 1) {
    return "Hay disponibilidad"
  } else if (this.disponibilidad == 0) {
    return "No Hay disponibilidad"
  } else {
    return "Error en la disponibilidad"
  }
}
}


const juego1 = new XboXcatalogo("Farcry", "Xbox 1", 0, 50)
const juego2 = new XboXcatalogo("Resident Evil", "Xbox 360", 1, 525)
const juego3 = new XboXcatalogo("Star Wars", "Xbox", 0, 50)
const juego4 = new XboXcatalogo("Caballeros de Zodiaco", "Xbox 1", 1, 40)

document.write(juego1.consola, juego1.videjuego, juego1.disponible(), juego1.precio + "<br>")
document.write(juego2.consola,juego2.videjuego,juego2.disponible(),juego2.precio + "<br>")
document.write(juego3.consola,juego3.videjuego,juego3.disponible(),juego3.precio + "<br>")
document.write(juego4.consola,juego4.videjuego,juego4.disponible(),juego4.precio + "<br>")
