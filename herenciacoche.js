class coche {
  constructor(marca) {
    this.marca = marca;
  }

  getAnuncio(){
    return "Ha llegado el nuevo coche de " + this.marca;
  }
}

class modelo extends coche {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }

  getAnunciocompleto(){
    return this.getAnuncio() + ", Su nuevo modelo es " + this.modelo;
  }
}

const micoche = new modelo("Mini", "Cooper");
console.log(micoche.getAnunciocompleto());
