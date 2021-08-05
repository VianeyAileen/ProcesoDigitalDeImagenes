// Clase que implemeta el filtro de Dithering al azar
export default class RandomDither {
    
    // Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    randomDither() {
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;

        //Implemetación del filtro Dithering al azar
        for (let i = 0; i < this.modelo.nuevoCanvas.width * this.modelo.nuevoCanvas.height; i++) {
                let idx = i * 4;
                let grayScale = (valor[idx] + valor[idx+1] + valor[idx+2])/3;

            if (grayScale > Math.random() * 255) {
                valor[idx] = 255;
                valor[idx+1] = 255;
                valor[idx+2] = 255;                
            } else {
                valor[idx] = 0;
                valor[idx+1] = 0;
                valor[idx+2] = 0;
                    
            }                
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA); 
    }
}