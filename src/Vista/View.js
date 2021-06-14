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

    //Alto Contraste
    document.getElementById("alto_contraste").addEventListener("click", () => {
      this.controlador.altoContraste();
    });

    document.getElementById("inverso").addEventListener("click", () => {
      this.controlador.inverso();
    });

    document.getElementById("blur1").addEventListener("click", () => {
      this.controlador.blur1();
    });

    document.getElementById("blur2").addEventListener("click", () => {
      this.controlador.blur2();
    });

    document.getElementById("motion_blur").addEventListener("click", () => {
      this.controlador.motionBlur();
    });

    document.getElementById("encontrar_bordes").addEventListener("click", () => {
      this.controlador.encontrarBordes();
    });

    document.getElementById("sharpen").addEventListener("click", () => {
      this.controlador.sharpen();
    });

    document.getElementById("emboss").addEventListener("click", () => {
      this.controlador.emboss();
    });

    document.getElementById("componentes").addEventListener("click", () => {
      this.controlador.componentes();
    });

    //Colores sin letra
    document.getElementById("colores_sin_letras").addEventListener("click", () => {
      $('#lienzo').append("<div id='palabra' class = 'palabra'><div>");
      this.controlador.colorM();
    })

    //Tonos grises
    document.getElementById("tonos_de_gris").addEventListener("click", () => {
      $('#lienzo').append("<div id='palabra' class = 'palabra'><div>");
      this.controlador.colorG();
    })

    document.getElementById("letras_bn").addEventListener("click", () => {
      $('#lienzo').append("<div id='palabra' class = 'palabra'><div>");
      this.controlador.letras16();
    })

    document.getElementById("colores_16").addEventListener("click", () => {
      $('#lienzo').append("<div id='palabra' class = 'palabra'><div>");
      this.controlador.colores16()
    })

    document.getElementById("gris_16").addEventListener("click", () => {
      $('#lienzo').append("<div id='palabra' class = 'palabra'><div>");
      this.controlador.gris16()
    })

    document.getElementById("frase").addEventListener("click", () => {
      $('#lienzo').append("<div id='palabra' class = 'palabra'><div>");
      this.controlador.frase();
    })

    document.getElementById("domino_b").addEventListener("click", () => {
      $('#lienzo').append("<div id='dominoblanco' class = 'dominoblanco'><div>");
      this.controlador.dominoB();
    })

    document.getElementById("domino_n").addEventListener("click", () => {
      $('#lienzo').append("<div id='dominonegro' class = 'dominonegro'><div>");
      this.controlador.dominoN();
    })

    document.getElementById("naipes").addEventListener("click", () => {
      $('#lienzo').append("<div id='cartas' class = 'cartas'><div>");
      this.controlador.naipes();
    })

    //Marca Agua
    document.getElementById("marca_de_agua").addEventListener("click", () => {
      this.controlador.marcaAgua();
    })
  }

  //Mostrar canvas
  showCanvas() {
    this.canvas.style.display = "block";
  }
}