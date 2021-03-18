// Clase que implementa el filtro Blur 1 y Blur 2
export default class Blur {

    // Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    //Función que implementa el filtro blur 1.
    blur1() {
        // Matriz
        let matriz = {
            values:
                [
                    0.0, 0.2, 0.0,
                    0.2, 0.2, 0.2,
                    0.0, 0.2, 0.0
                ],
            n: 3, m: 3
        }
        // Aplicamos la convolución
        this.convolucion(matriz);
    }

    //Función que implementa el filtro blur 2.
    blur2() {
        // Matriz
        let matriz = {
            // Dividimos el factor entre la suma de todos los elementos que es 13.
            values:
                [
                    0, 0, 1/13, 0, 0,
                    0, 1/13, 1/13, 1/13, 0,
                    1/13, 1/13, 1/13, 1/13, 1/13,
                    0, 1/13, 1/13, 1/13, 0,
                    0, 0, 1/13, 0, 0,
                ],
            n: 5, m: 5
        }
        // Aplicamos la convolución
        this.convolucion(matriz);
    }

    //Obtenemos el color de cada pixel
    getPixel(x, y, width) {
        let color = x * 4 + y * (width * 4);
        return { red: color, green: color + 1, blue: color + 2, A: color + 3};
    }

    // Funcion auxiliar que calcula la convolución que recibe como parámetro una matriz
    convolucion(matriz) {
        // Leemos los datos de la imagen
        let ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let ponPixelNuevo = this.modelo.nuevoCtx.createImageData(this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);

        let columna = Math.floor(matriz.n / 2);
        let fila = Math.floor(matriz.m / 2);
        let x, y, color_i, colorNuevo;

        // Recorremos cada pixel de la imagen
        for (let i = columna; i < this.modelo.nuevoCanvas.width - columna; i++) {
            for (let j = fila; j < this.modelo.nuevoCanvas.height - fila; j++) {
                colorNuevo = { red: 0, green: 0, blue: 0 };

                // Recorremos cada elemento de la matrix
                for (let entrada = 0; entrada < matriz.values.length; entrada++) {
                    x = (entrada % matriz.n) - columna;
                    y = Math.floor(entrada / matriz.n) - fila;

                    color_i = this.getPixel(i + x, j + y, this.modelo.nuevoCanvas.width);

                    //Multiplicamos cada valor de matriz con el pixel de imagen correspondiente.
                    colorNuevo.red += ponPixel.data[color_i.red] * matriz.values[entrada];
                    colorNuevo.green += ponPixel.data[color_i.green] * matriz.values[entrada];
                    colorNuevo.blue += ponPixel.data[color_i.blue] * matriz.values[entrada];
                }

                color_i = this.getPixel(i, j, this.modelo.nuevoCanvas.width);
                ponPixelNuevo.data[color_i.red] = colorNuevo.red;
                ponPixelNuevo.data[color_i.green] = colorNuevo.green;
                ponPixelNuevo.data[color_i.blue] = colorNuevo.blue;
                ponPixelNuevo.data[color_i.A] = ponPixel.data[color_i.A];
            }
        }
        //Aplicamos el filtro a la imagen
        this.modelo.contextA.putImageData(ponPixelNuevo, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}