//Clase que implementa el filtro Recursivo Tonos de Grises
export default class RecursivoByN {

    //Constructor de la la clase
    constructor(modelo) {
        this.modelo = modelo;
        //Tamaño del cual serán las imágenes recursivas.
        this.tamano = 6;

        this.width = 0;
        this.height = 0;

        this.ejeX = 0
        this.ejeY = 0;

        this.m = 0;
        this.n = 0;

        //Devuelve una referencia al elemento por su id.
        //Devuelve un contexto de dibujo en el lienzo. 
        this.aux = document.getElementById("aux");
        this.auxcontext = aux.getContext("2d");

        this.aux.setAttribute("width", this.tamano);
        this.aux.setAttribute("height", this.tamano);

        this.imageData;
    }

    recursivoByN(byn) {
        this.width=this.modelo.nuevoCanvas.width;
        this.height=this.modelo.nuevoCanvas.height;

        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height)
        var valor2 = ponPixel.data

        var red = 0
        var green = 0
        var blue = 0;

        //Implementación del filtro
        while (this.ejeX < this.width) {
            this.m = ((this.ejeX + this.tamano) < this.width) ? this.tamano : this.width - this.ejeX;
            while (this.ejeY < this.height) {
                this.n = ((this.ejeY + this.tamano) < this.height) ? this.tamano : this.height - this.ejeY;

                for (let i = 0; i < this.m; i++) {
                    for (let j = 0; j < this.n; j++) {
                        let pixel = this.getPixel(i + this.ejeX, j + this.ejeY, this.modelo.nuevoCanvas.width);
                        red = red + valor2[pixel.red];
                        green = green + valor2[pixel.green];
                        blue = blue + valor2[pixel.blue];
                    }

                } 
                red = red / (this.m * this.n)
                green = green / (this.m * this.n)
                blue = blue / (this.m * this.n)

                let prom = (red,green,blue)

                this.auxcontext.clearRect(0, 0, this.tamano, this.tamano);
                this.auxcontext.drawImage(this.modelo.nuevoCanvas, 0, 0, this.tamano, this.tamano);
                this.imageData = this.auxcontext.getImageData(0, 0, this.aux.width, this.aux.height);
                
                if (byn) this.gris(prom);
                
                this.modelo.contextA.putImageData(this.imageData, this.ejeX, this.ejeY);
                this.ejeY = this.ejeY + this.n
            }
            this.ejeX = this.ejeX + this.m
            this.ejeY = 0
        }
        this.tamano = 6;
        this.width = 0;
        this.height = 0;
        this.ejeX = 0
        this.ejeY = 0;
        this.m = 0;
        this.n = 0;
        
        //Aplicamos el filtro a la imagen.
        this.modelo.putImage(this.modelo.canvasA)
    }

    //Funciones auxiliares
    //Obtenemos el color de cada pixel
    getPixel(x, y, width) {
        let color = x * 4 + y * (width * 4)
        return { red: color, green: color + 1, blue: color + 2};
    }

    apply_function_per_pixel(fun) {
        for (let i = 0; i < this.tamano; i++) {
            for (let j = 0; j < this.tamano; j++) {
                let valor = this.imageData.data;
                var color_index = this.getPixel(i, j, this.tamano);
                var new_color = fun(valor[color_index.red], valor[color_index.green], valor[color_index.blue]);
                
                valor[color_index.red] = new_color.red;
                valor[color_index.green] = new_color.green;
                valor[color_index.blue] = new_color.blue;
            }
        }
    }

    //Función auxiliar para pasar a tonos de gris la imagen.
    gris(factor) {
        let gray;
        this.apply_function_per_pixel(function (red, green, blue) {
            gray = (red + green +  blue) / 3;
            return { red: gray+factor, green: gray+factor, blue: gray+factor };
        });
    }
}
