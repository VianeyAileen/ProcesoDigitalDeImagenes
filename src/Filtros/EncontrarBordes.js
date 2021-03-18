// Clase que implementa el filtro Encontrar Bordes.
export default class EncontrarBordes {

    // Constructor de la clase 
    constructor(modelo){
        this.modelo = modelo;
    }

    // Función que implementa el filtro Encontrar Bordes.
    encontrarBordes() {
        // Matriz
        var matriz = {
            valores:
                [ -1, 0, 0, 0, 0,
                  0, -2, 0, 0, 0,
                  0, 0, 6, 0, 0,
                  0, 0, 0, -2, 0,
                  0, 0, 0, 0, -1 ],
            //Indicamos que la matriz es de tamaño 5x5.
            n:5, m:5
        }
        // Aplicamos la convolución
        this.convolucion(matriz);
    }

    //Obtenemos el color de cada pixel
    getPixel(x, y, width) {
        var color = x * 4 + y * (width * 4);
        return { red: color, green: color + 1, blue: color + 2, A: color + 3};
    }

    // Funcion auxiliar que calcula la convolución y recibe como parámetro una matriz
    convolucion(matriz) {
        // Leemos los datos de la imagen
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        // Crea un nuevo objeto ImageData en blanco con las dimensiones especificadas.
        var ponPixelNuevo = this.modelo.nuevoCtx.createImageData(this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);

        var columna = Math.floor(matriz.n / 2);
        var fila = Math.floor(matriz.m / 2);
        var x, y, color_i, colorNuevo;

        // Recorremos cada pixel de la imagen
        for (var i = columna; i < this.modelo.nuevoCanvas.width - columna; i++) {
            for (var j = fila; j < this.modelo.nuevoCanvas.height - fila; j++) {
                colorNuevo = { red: 0, green: 0, blue: 0 };

                // Recorremos cada elemento de la matrix
                for (var entrada = 0; entrada < matriz.valores.length; entrada++) {
                    x = (entrada % matriz.n) - columna;
                    y = Math.floor(entrada / matriz.n) - fila;

                    color_i = this.getPixel(i + x, j + y, this.modelo.nuevoCanvas.width);

                    //Multiplicamos cada valor de matriz con el pixel de imagen correspondiente.
                    colorNuevo.red += ponPixel.data[color_i.red] * matriz.valores[entrada];
                    colorNuevo.green += ponPixel.data[color_i.green] * matriz.valores[entrada];
                    colorNuevo.blue += ponPixel.data[color_i.blue] * matriz.valores[entrada];
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