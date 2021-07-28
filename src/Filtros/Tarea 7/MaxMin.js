//Clase que implementa el filtro Máximo y Mínimo a una imagen.
export default class MaxMin {

    // Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    //Función que implementa el filtro máximo
    max() {
        let matriz = {
            valores: [ 0, 0, 0,
                      0, 0, 0,
                      0, 0, 0 ],
            n:3, m:3
        }
        // Aplicamos la convolución
        this.convolucion(matriz, true);
    }

    //Función que implementa el filtro mínimo
    min() {
        let matriz = {
            valores: [ 0, 0, 0,
                      0, 0, 0,
                      0, 0, 0 ],
            n:3, m:3
        }
        // Aplicamos la convolución
        this.convolucion(matriz, false);
    }

    
    //Obtenemos el color de cada pixel
    getPixel(x, y, width) {
        let color = x * 4 + y * (width * 4);
        return { red: color, green: color + 1, blue: color + 2, alpha: color + 3};
    }

    // Funcion auxiliar que calcula la convolución y recibe como parámetro una matriz
    convolucion(matriz, b) {
        // Leemos los datos de la imagen
        let ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor = ponPixel.data;
        // Crea un nuevo objeto ImageData en blanco con las dimensiones especificadas.
        let ponPixelNuevo = this.modelo.nuevoCtx.createImageData(this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor2 = ponPixelNuevo.data;

        let columna = Math.floor(matriz.n / 2);
        let fila = Math.floor(matriz.m / 2);
        let x, y, color_i, colorNuevo;

        // Recorremos cada pixel de la imagen
        for (let i = columna; i < this.modelo.nuevoCanvas.width - columna; i++) {
            for (let j = fila; j < this.modelo.nuevoCanvas.height - fila; j++) {
                colorNuevo = { red: 0, green: 0, blue: 0 };

                let max;
                if (b) {
                    max = 0;
                } else {
                    max = 300;
                }

                // Recorremos cada elemento de la matrix
                for (let entrada = 0; entrada < matriz.valores.length; entrada++) {
                    x = (entrada % matriz.n) - columna;
                    y = Math.floor(entrada / matriz.n) - fila;

                    color_i = this.getPixel(i + x, j + y, this.modelo.nuevoCanvas.width);

                    let gray = (valor[color_i.red] + valor[color_i.green] + valor[color_i.blue])/3;
                    if (b) {
                        max = Math.max(max, gray);
                    } else {
                        max = Math.min(max,gray);
                    }
                }

                color_i = this.getPixel(i, j, this.modelo.nuevoCanvas.width);
                valor2[color_i.red] = max;
                valor2[color_i.green] = max;
                valor2[color_i.blue] = max;
                valor2[color_i.alpha] = valor[color_i.alpha];
            }
        }
        //Aplicamos el filtro a la imagen
        this.modelo.contextA.putImageData(ponPixelNuevo, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }    
}