// Clase que implementa la función del filtro Componentes RGB.
export default class Componentes {
    // Constructor de la clase.
    constructor(modelo) {
        this.modelo = modelo;
    }

    componentes() {
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;

        //Adignamos el valor que nos pasen por el prompt.
        var red = parseInt(prompt("Ingrese un valor entre el 0 a 255 que desea para el rojo"));
        var green = parseInt(prompt("Ingrese un valor entre el 0 a 255 que desea para el verde"));
        var blue = parseInt(prompt("Ingresa un valor entre el 0 a 255 que desea para el azul"));

        //Implementación del filtro.
        for (let i = 0; i < valor.length; i += 4) {
            valor[i] += red;
            valor[i+1] += green;
            valor[i+2] += blue;
            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}