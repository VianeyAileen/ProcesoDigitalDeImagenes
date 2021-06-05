// Clase que implementa la función del filtro alto contraste
export default class AltoContraste {
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
            var gray = 0.3*valor[i]+0.59*valor[i+1]+0.11*valor[i+2];
            valor[i] = gray;
            valor[i+1] = gray;
            valor[i+2] = gray;            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }

    altoContraste(){
        //Primero pasamos a tonos de gris la imagen.
        this.gris();
        
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;

        // Implementación del filtro Alto Contraste
        for (var i = 0; i < valor.length; i+= 4) {
            var red = valor[i];
            var blue = valor[i+1];
            var green = valor[i+2];
            var rgb = [red, green, blue];

            // Si cada pixel es mayor a 127, pinto un pixel blanco (255,255,255)
            if(rgb[0] > 127) valor[i] = 255
            if(rgb[1] > 127) valor[i+1] = 255
            if(rgb[2] > 127) valor[i+2] = 255

            // Si cada pixel es menor a 127, pinto un punto negro (0,0,0)
            if(rgb[0] < 127) valor[i] = 0
            if(rgb[1] < 127) valor[i+1] = 0
            if(rgb[2] < 127) valor[i+2] = 0            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}