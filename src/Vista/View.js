//Clase donde implementamos los eventos de cada boton.
export default class View {
  constructor() {
  }

  init(controlador) {
    this.controlador = controlador;
    
    //Cargamos la imagen
    this.canvas = document.getElementById("canvasFiltro");

    //Abrir
    document.getElementById("abrir").addEventListener("click", () => {
      this.controlador.open();
    });

    //Guardar
    document.getElementById("guardar").addEventListener("click", () => {
      this.controlador.save();
    });

    //Quitar filtro
    document.getElementById("rehacer").addEventListener("click", () => {
      this.controlador.undo();
    });

    //Gris 1
    document.getElementById("gris1").addEventListener("click", () => {
      this.controlador.gris1();
    });

    //Gris 2
    document.getElementById("gris2").addEventListener("click", () => {
      this.controlador.gris2();
    });

    //Gris 3
    document.getElementById("gris3").addEventListener("click", () => {
      this.controlador.gris3();
    });

    //Gris 4
    document.getElementById("gris4").addEventListener("click", () => {
      this.controlador.gris4();
    });

    //Gris 5
    document.getElementById("gris5").addEventListener("click", () => {
      this.controlador.gris5();
    });

    //Gris 6
    document.getElementById("gris6").addEventListener("click", () => {
      this.controlador.gris6();
    });

    //Gris 7
    document.getElementById("gris7").addEventListener("click", () => {
      this.controlador.gris7();
    });

    //Gris 8
    document.getElementById("gris8").addEventListener("click", () => {
      this.controlador.gris8();
    });

    //Gris 9
    document.getElementById("gris9").addEventListener("click", () => {
      this.controlador.gris9();
    });

    //Brillo
    document.getElementById("brillo").addEventListener("click", () => {
      this.controlador.brillo();
    });

    //Mosaico
    document.getElementById("mosaico").addEventListener("click", () => {
      this.controlador.mosaico();
    });
  }

  //Mostrar canvas
  showCanvas() {
    this.canvas.style.display = "block";
  }
}