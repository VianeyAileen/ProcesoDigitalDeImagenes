//Clase que implementa la función del filtro mosaico.
export default class Mosaico {

    //Constructor de la clase
    constructor(modelo){
        this.modelo = modelo;
    }

    //Obtenemos el color de cada pixel.
    getPixel(x, y, width) {
        var color = x * 4 + y * (width * 4);
        return { red: color, green: color + 1, blue: color + 2};
    }

    //Función que implementa el mosaico.
    mosaico(tamano) {
        //Leemos los datos de la imagen.
        let pixelDeImagen = this.modelo.context.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);

        let rojo = 0;
        let verde = 0;
        let azul = 0;
        let x = 0;
        let y = 0;
        let u = 0;
        let v = 0;

        //Implementación del filtro mosaico.
        while(x < this.modelo.nuevoCanvas.width){
            u = ((x + tamano) < this.modelo.nuevoCanvas.width) ? tamano : (this.modelo.nuevoCanvas.width - x);
            while(y < this.modelo.nuevoCanvas.height) {
                v = ((y + tamano) < this.modelo.nuevoCanvas.height) ? tamano : (this.modelo.nuevoCanvas.height - y);
                for (let i = 0; i < u; i++) {
                    for (let j = 0; j < v; j++) {
                        let pixel = this.getPixel(i + x, j + y, this.modelo.nuevoCanvas.width);
                        rojo += pixelDeImagen.data[pixel.red];
                        verde += pixelDeImagen.data[pixel.green];
                        azul += pixelDeImagen.data[pixel.blue];
                        
                    }                    
                }
                rojo /= (u * v);
                verde /= (u * v);
                azul /= (u * v);

                for (let i = 0; i < u; i++) {
                    for (let j = 0; j < v; j++) {
                        let valor = this.getPixel(i + x, j + y, this.modelo.nuevoCanvas.width);
                        pixelDeImagen.data[valor.red] = rojo;
                        pixelDeImagen.data[valor.green] = verde;
                        pixelDeImagen.data[valor.blue] = azul;                        
                    }
                    
                }
                y += v;
                rojo = 0;
                verde = 0;
                azul = 0;
            } 
            x += u;
            y = 0;
        }
        //Aplicamos el filtro a la imagen
        this.modelo.contextA.putImageData(pixelDeImagen, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}