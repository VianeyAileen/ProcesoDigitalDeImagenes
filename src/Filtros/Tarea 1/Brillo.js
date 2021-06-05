//Clase que implementa la función del filtro brillo.
export default class Brillo {
    //Constructor de la clase
    constructor(modelo){
        this.modelo = modelo;
    }

    //Filtro Brillo
    brillo(nivel){
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;

        //Implementación del filtro brillo
        for (var i = 0; i < valor.length; i += 4) {
            valor[i] = valor[i] + nivel;
            valor[i+1] = valor[i+1] + nivel;
            valor[i+2] = valor[i+2] + nivel;
            
            if (valor[i] > 255) valor[i] = 255;
            if (valor[i+1] > 255) valor[i+1] = 255;
            if (valor[i+2] > 255) valor[i+2] = 255;

            if (valor[i] < 0) valor[i] = 0;
            if (valor[i+1] < 0) valor[i+1] = 0;
            if (valor[i+2] < 0) valor[i+2] = 0;

        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}