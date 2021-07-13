//impotamos los filtros.
import TonosGris from "..//Filtros/Tarea 1/TonosGris.js"
import Brillo from "../Filtros/Tarea 1/Brillo.js"
import Mosaico from "../Filtros/Tarea 1/Mosaico.js"
import AltoContraste from "../Filtros/Tarea 2/AltoContraste.js"
import Inverso from "../Filtros/Tarea 2/Inverso.js"
import Convolucion from "../Filtros/Tarea 2/Convolucion.js"
import Componentes from "../Filtros/Tarea 2/Componentes.js"
import Letras from "../Filtros/Tarea 3/Letras.js"
import Combinacion from "../Filtros/Tarea 3/Combinacion.js"
import Frase  from "../Filtros/Tarea 3/Frase.js"
import Domino from "../Filtros/Tarea 3/Domino.js"
import Naipes from "../Filtros/Tarea 3/Naipes.js"
import MarcaAgua from "../Filtros/Tarea 4/MarcaAgua.js"
import RecursivoByN from "../Filtros/Tarea 5/RecursivoByN.js"
import RecursivoColor from "../Filtros/Tarea 5/RecursivoColor.js"
import Semitono1 from "../Filtros/Tarea 6/Semitono1.js"
import Semitono2 from "../Filtros/Tarea 6/Semitono2.js"
import Semitono3 from "../Filtros/Tarea 6/Semitono3.js"

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
    this.filtroConv = new Convolucion(modelo);
    this.filtroComponentes = new Componentes(modelo);
    this.filtroLetras = new Letras(modelo);
    this.filtroCombinacion = new Combinacion(modelo);
    this.filtroFrase = new Frase(modelo);
    this.filtroDomino = new Domino(modelo);
    this.filtroNaipes = new Naipes(modelo);
    this.filtroMarca = new MarcaAgua(modelo);
    this.filtroRecursivoByN = new RecursivoByN(modelo);
    this.filtroRecursivoColor = new RecursivoColor(modelo);
    this.filtroSemitono1 = new Semitono1(modelo);
    this.filtroSemitono2 = new Semitono2(modelo);
    this.filtroSemitono3 = new Semitono3(modelo);
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
    this.filtroBrillo.brillo(parseInt(prompt(`Indique la cantidad de brillo que desea:
    - Más brillo valores del 0 a 255
    - Menos brillo valores del 0 a -255 `)));
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
    this.filtroConv.blur1();
  }

  //Blur 2
  blur2() {
    this.filtroConv.blur2();
  }

  //Motion Blur
  motionBlur() {
    this.filtroConv.motionBlur();
  }

  //Encontrar Bordes
  encontrarBordes() {
    this.filtroConv.encontrarBordes();
  }

  //Sharpen
  sharpen() {
    this.filtroConv.sharpen();
  }

  //Emboss
  emboss() {
    this.filtroConv.emboss();
  }

  //Componentes RGB
  componentes() {
    this.filtroComponentes.componentes();
  }

  //Colores sin letra
  colorM() {
    this.filtroLetras.colorM(prompt('Ingrese una letra o un símbolo'), true, false);
  }

  //Letra en tonos de gris
  colorG() {
    this.filtroLetras.colorG(prompt('Ingrese una letra o un símbolo'), true, false);
  }

  // 16 letras
  letras16(){
    this.filtroLetras.letras16(false, false);
  }

  //colores + 16 letras
  colores16(){
    this.filtroCombinacion.colores16(true, true, false);
  }
  
  //gris + 16 letras
  gris16(){
    this.filtroCombinacion.gris16(true, true, false);
  }

  //Frase
  frase(){
    this.filtroFrase.frase(prompt('Ingrese una frase'), true, true);
  }

  //Dominó Blanco
  dominoB(){
    this.filtroDomino.dominoB(true, true, false);
  }

  //Dominó Negro
  dominoN(){
    this.filtroDomino.dominoN(true, true, false);
  }

  // Naipes
  naipes(){
    this.filtroNaipes.naipes(true, true, false);
  }

  //Marca Agua
  marcaAgua(){
    this.filtroMarca.marcaAgua(prompt('Ingrese una frase'));
  }

  //Recursivo Tonos de Gris
  recursivoByN() {
    this.filtroRecursivoByN.recursivoByN(true);
  }

  //Recursivo Color
  recursivoColor() {
    this.filtroRecursivoColor.recursivoColor(true);
  }

  //Semitono1
  semiTono1() {
    this.filtroSemitono1.semiTono1();
  }

  //Semitono2
  semiTono2() {
    this.filtroSemitono2.semiTono2();
  }

  //Semitono3
  semiTono3() {
    this.filtroSemitono3.semiTono3();
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