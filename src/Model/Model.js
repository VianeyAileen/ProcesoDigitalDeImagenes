export default class Model {
  constructor() {
    this.image;
    this.canvas;
    this.context;
    this.nuevoCanvas;
    this.nuevoCtx;
   }

  init() {
    //Imagen Original
    //Devuelve una referencia al elemento por su id.
    //Devuelve un contexto de dibujo en el lienzo.
    //Crea una elemento HTML. 
    this.canvas = document.getElementById("myCanva");
    this.context = this.canvas.getContext("2d");
    this.aux_canvas = document.createElement("canvas");
    this.aux_context = this.aux_canvas.getContext("2d");

    //Imagen Editada
    //Devuelve una referencia al elemento por su id.
    //Devuelve un contexto de dibujo en el lienzo.
    //Crea una elemento HTML. 
    this.nuevoCanvas = document.getElementById("canvasFiltro");
    this.nuevoCtx = this.nuevoCanvas.getContext("2d");
    this.canvasA = document.createElement("canvas");
    this.contextA = this.canvasA.getContext("2d");
  }
  
  //Ponemos la imagen en los dos lienzos, cuyo tamaño esta definico por los valores que.
  setImage(image) {
    this.image=image;
    this.canvas.setAttribute("width", this.canvas.width);
    this.canvas.setAttribute("height", this.canvas.height);
    this.aux_canvas.setAttribute("width", this.canvas.width);
    this.aux_canvas.setAttribute("height", this.canvas.height);

    this.nuevoCanvas.setAttribute("width", this.nuevoCanvas.width);
    this.nuevoCanvas.setAttribute("height", this.nuevoCanvas.height);
    this.canvasA.setAttribute("width", this.nuevoCanvas.width);
    this.canvasA.setAttribute("height", this.nuevoCanvas.height);

    this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
    this.nuevoCtx.drawImage(image, 0, 0, this.nuevoCanvas.width, this.nuevoCanvas.height);

    this.undo_step = 0;
    this.undo_list = [image];
  }

  //Obtenemos la imagen editada
  getImage() {
    return this.nuevoCanvas.toDataURL("image/png");
  }

  //Regresamos los valores originales.
  putImage(image) {
    this.nuevoCtx.clearRect(0, 0, this.nuevoCanvas.width, this.nuevoCanvas.height);
    this.nuevoCtx.drawImage(image, 0, 0, 500, 400);

    let img = document.createElement("img");
    img.src = this.nuevoCanvas.toDataURL("image/png");
    
    this.undo_step++;
    this.undo_list[this.undo_step] = img;
  }

  undo() {
    if (this.undo_step > 0) {
      this.undo_step--;

      this.nuevoCtx.clearRect(0, 0, this.nuevoCanvas.width, this.nuevoCanvas.height);
      this.nuevoCtx.drawImage(this.undo_list[this.undo_step], 0, 0, 500, 400);
    }
  }
}