//impotamos los filtros.
import TonosGris from "../Filtros/TonosGris.js";
import Brillo from "../Filtros/Brillo.js";
import Mosaico from "../Filtros/Mosaico.js";
import AltoContraste from "../Filtros/AltoContraste.js"
import Inverso from "../Filtros/Inverso.js";
import Blur from "../Filtros/Blur.js"
//Clase que habilita los botónes para cada filtro,
//para subir/guardar una imagen,
//y quitar un filtro
export default class Controller {
  constructor() { }

  init(modelo, vista) {
    this.modelo = modelo;
    this.vista = vista;
    this.tonosGris = new TonosGris(modelo);
    this.filtroBrillo = new Brillo(modelo);
    this.filtroMosaico = new Mosaico(modelo);
    this.filtroAltoContraste = new AltoContraste(modelo);
    this.filtroInverso = new Inverso(modelo);
    this.filtroBlur = new Blur(modelo);
  }

  //Gris 1
  gris1() {
    this.tonosGris.gris1();
  }

  //Gris 2
  gris2() {
    this.tonosGris.gris2();
  }

  //Gris 3
  gris3() {
    this.tonosGris.gris3();
  }

  //Gris 4
  gris4() {
    this.tonosGris.gris4();
  }

  //Gris 5
  gris5() {
    this.tonosGris.gris5();
  }

  //Gris 6
  gris6() {
    this.tonosGris.gris6();
  }

  //Gris 7
  gris7() {
    this.tonosGris.gris7();
  }

  //Gris 8
  gris8() {
    this.tonosGris.gris8();
  }

  //Gris 9
  gris9() {
    this.tonosGris.gris9();
  }

  //Brillo
  brillo() {
    this.filtroBrillo.brillo(parseInt(prompt('Indique la cantidad de brillo que desea: ')));
  }

  //Mosaico
  mosaico() {
    this.filtroMosaico.mosaico(parseInt(prompt('¿Cuántos pixeles quiere para el mosaico?')));
  }

  //Alto Contraste
  altoContraste() {
    this.filtroAltoContraste.altoContraste();
  }

  //Inverso
  inverso() {
    this.filtroInverso.inverso();
  }

  //Blur 1
  blur1() {
    this.filtroBlur.blur1();
  }

  //Blur 2
  blur2() {
    this.filtroBlur.blur2();
  }

  //Motion Blur
  motionBlur() {
    this.filtroBlur.motionBlur();
  }

  //Abrir una imagen
  open() {
    let file_input = document.createElement("input");
    file_input.setAttribute("type", "file");
    //Tipo de imágenes que acepta el programa.
    file_input.setAttribute("accept", "image/png,image/jpeg");

    file_input.addEventListener("change", (evt) => {
      let file = file_input.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (elem) => {
        let image = document.createElement("img");

        image.addEventListener("load", () => {
          this.vista.showCanvas();
          this.modelo.setImage(image);
        });
        image.src = reader.result;
      });
      if (file) {
        reader.readAsDataURL(file);
      }
    });

    file_input.click();
  }

  // Guardar una imagen.
  save() {
    let link = document.createElement("a");
    link.setAttribute("download", "image.png");
    document.body.appendChild(link);

    link.addEventListener("click", (evt) => {
      link.href = this.modelo.getImage();
      document.body.removeChild(link);
    });

    link.click();
  }

  //Rehacer un paso.
  undo() {
    this.modelo.undo();
  }
}