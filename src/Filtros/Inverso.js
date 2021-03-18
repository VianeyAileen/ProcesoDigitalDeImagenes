// Clase que implementa la función del filtro alto contraste
export default class Inverso {
    // Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    //Función auxiliar para pasar a tonos de gris la imagen.
    gris(){
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;
        //Implementación del filtro.
        for (var i = 0; i < valor.length; i += 4) {
            var gray = (valor[i]+valor[i+1]+valor[i+2])/3;
            valor[i] = gray;
            valor[i+1] = gray;
            valor[i+2] = gray;            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }

    inverso(){
        //Primero pasamos a tonos de gris la imagen.
        this.gris();
        
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;

        // Implementación del filtro Inverso
        for (var i = 0; i < valor.length; i+= 4) {
            /*var red = valor[i];
            var blue = valor[i+1];
            var green = valor[i+2];
            var rgb = [red, green, blue];*/

            valor[i] = valor[i];
            valor[i+1] = valor[i+1];
            valor[i+2] = valor[i+2];

            // Si cada pixel es mayor a 127, pinto un pixel blanco (255,255,255)
            if (valor[i] > 127) valor[i] = 255;
            if (valor[i+1] > 127) valor[i+1] = 255;
            if (valor[i+2] > 127) valor[i+2] = 255;

            // Si cada pixel es menor a 127, pinto un pixel negro (0, 0, 0)
            if (valor[i] < 127) valor[i] = 0;
            if (valor[i+1] < 127) valor[i+1] = 0;
            if (valor[i+2] < 127) valor[i+2] = 0;
            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}