class consola {
  constructor(marca) {
    this.marca = marca;
  }
  getanuncio() {
    return "El modelo de consola de la marca " + this.marca;
  }
}

class modelo extends consola {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  getanunciocompleto(){
return this.getanuncio() + "es " + this.modelo;

  }

}

const miconsola = new modelo("Sony ", "PS5");
console.log(miconsola.getanunciocompleto());
