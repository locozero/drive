const { Sala } = require("./Sala");
const { Pelicula } = require("./Pelicula");
const { Documental } = require("./Documental");
const { Partido } = require("./Partido");

class Cine {
  constructor(sala) {
    this.sala = sala;
  }

  reproducir() {
    return this.sala.setMovie;
  }
}

const titanic = new Pelicula("Titanic", "220 min", "B")
const Sala1 = new Sala("1","250 Personas", titanic)
const cinepolisGalerias = new cine (Sala1)

const Docum = new Documental("Black Flag", "130 min", "A")
const Sala2 = new Sala("2","230 Personas", docum)
const cinepolisPabellon = new cine (Sala2)

const partidoFut = new Partido("Madrid vs ManU", "90 min", "A")
const Sala3 = new Sala("3","500 Personas", partidoFut)
const cinemex = new cine (Sala3)


document.write(cinepolisGalerias.reproducir())
document.write(cinepolisPabellon.reproducir())
document.write(cinemex.reproducir())