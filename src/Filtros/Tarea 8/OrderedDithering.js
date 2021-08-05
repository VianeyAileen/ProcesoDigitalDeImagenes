//Clase que implementa el filtro Dithering Ordenado
export default class OrderedDithering {

    //Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    orderedDither() {

        // Matriz de 3x3 que se usa para el filtro
        let matriz = 
                [[8/9, 3/9, 4/9],
                 [6/9, 1/9, 2/9],
                 [7/9, 5/9, 9/9]];

        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;

        //Implementación del filtro
        for (let y = 0; y < this.modelo.nuevoCanvas.height; y++) {
            for (let x = 0; x < this.modelo.nuevoCanvas.width; x++) {
                let e = matriz[x % 3][y % 3] * 255;
                let idx = (y * this.modelo.nuevoCanvas.width + x) * 4;
                let grayScale = (valor[idx] + valor[idx+1] + valor[idx+2])/3;

                if (grayScale > e) {
                    valor[idx] = 255;
                    valor[idx+1] = 255;
                    valor[idx+2] = 255;
                    
                } else {
                    valor[idx] = 0;
                    valor[idx+1] = 0;
                    valor[idx+2] = 0;
                }
                
            }
            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA); 
    }
}