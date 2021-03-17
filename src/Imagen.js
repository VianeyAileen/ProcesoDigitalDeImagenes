//Clase donde importamos archivos necesarios,
//los cuales seran usados para la clase principal del programa.
import Model from "../src/Model/Model.js";
import Controller from "../src/Controlador/Controller.js";
import View from "../src/Vista/View.js";

export default class Imagen {
  constructor() {
    let modelo = new Model();
    let vista = new View();
    let controlador = new Controller();

    vista.init(controlador);
    modelo.init(controlador);
    controlador.init(modelo, vista);
  }
}
