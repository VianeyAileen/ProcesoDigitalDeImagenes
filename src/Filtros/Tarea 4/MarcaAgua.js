//Clase que implementa el filtro Marca de Agua
export default class MarcaAgua {

    //Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    //Implementación del filtro
    marcaAgua(texto) {

        //Leemos los datos de la imagen.
        let ponPixel = this.modelo.context.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor = ponPixel.data;
        let ponPixel2 = this.modelo.context.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor2 = ponPixel2.data;
        
        let canvasA = document.getElementById("marca");
        let contextA = canvasA.getContext("2d");
        
        //Establece el tamaño del canvas en función del tamaño de la imagen
        let cx = (canvasA.width = this.modelo.nuevoCanvas.width)/2;
        let cy = (canvasA.height = this.modelo.nuevoCanvas.height)/2;

        
        //El texto va centrado en el centro del canva
        contextA.textAlign = "center";
        contextA.textBaseline = "middle"
        contextA.fillStyle = "rgb(255,255,255,0.5)";

        //Define el tamaño y tipo de letra
        let tamanoTexto = parseInt(prompt("Por favor ingresa el tamaño que desea para la letra"));
        contextA.font = tamanoTexto + "px Arial";

        let anchuraTexto = contextA.measureText(texto).width;
        
        //Si el texto ingresado es demasiado grande, se diminuie el tamaño del texto 
        while(anchuraTexto > canvasA.width -20) {
            tamanoTexto--;
            contextA.font = tamanoTexto + "px Arial";
            anchuraTexto = contextA.measureText(texto).width;
        }

        //Pinta el texto en el canvas
        contextA.fillText(texto, cx, cy);

        let ponPixel3 = contextA.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor3 = ponPixel3.data;       
        
        for (let i = 0; i < valor.length; i += 4) {
            if (valor3[i] != 0) {
                valor[i] = (valor2[i] * 0.5) + (valor3[i] * (1 - 0.5));
                valor[i+1] = (valor2[i+1] * 0.5) + (valor3[i+1] * (1 - 0.5));
                valor[i+2] = (valor2[i+2] * 0.5) + (valor3[i+2] * (1 - 0.5));
            }
        }

         //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }

}