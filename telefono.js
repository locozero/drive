class telefono {
  constructor(marca) {
    this.marca = marca;
  }
  getAnuncio(){
    return "ha llegado el nuevo telefono de " + this.marca;
  }
}

class modelo extends telefono {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }
  getAnunciocompleto(){
    return this.getAnuncio() + "El modelo que llego es " + this.modelo;
  }
}

const mitelefono = new modelo("Xiami", "redmi");
console.log(mitelefono.getAnunciocompleto());

/* class marca extends telefono {
  constructor(fabricante) {
    this.fabricante = fabricante;
  }
} */
