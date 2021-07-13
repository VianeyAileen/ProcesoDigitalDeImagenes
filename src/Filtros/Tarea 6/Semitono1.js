//Clase que implemeta el filtro Semitiono1
export default class Semitono1 {

    //Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo
    }

    //Implementación del filtro con semitonos de un sólo círculo
    async semiTono1() {

        //Tamaño del cual serán las imágenes recursivas.
        //Entre más grande el tamaño del pixel el procesamiento tarda menos
        //Entre más grande el tamaño del pixel el procesamiento aumenta
        this.tamano = parseInt(prompt(`Por favor ingesa el tamaño que desea para el pixel
*El tiempo de procesamiento de la imagen dependerá del tamaño del pixel*`));

        this.width = 0;
        this.height = 0;

        this.ejeX = 0
        this.ejeY = 0;

        this.m = 0;
        this.n = 0;

        //Devuelve una referencia al elemento por su id.
        //Devuelve un contexto de dibujo en el lienzo. 
        this.aux2 = document.getElementById("aux2");
        this.auxcontext = aux2.getContext("2d");

        this.aux2.setAttribute("width", this.tamano);
        this.aux2.setAttribute("height", this.tamano);

        this.img = document.getElementById("st");
        this.img.setAttribute("width", this.tamano);
        this.img.setAttribute("height", this.tamano);

        this.imageData;

        this.width=this.modelo.nuevoCanvas.width;
        this.height=this.modelo.nuevoCanvas.height;

        this.img.onload=()=>{

        }

        //Imágnes de semitonos de un solo círculo
        this.imagenes = ["../ProcesoDigitalDeImagenes/imagenes-semitonos/a1.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a2.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a3.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a4.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a5.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a6.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a7.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a8.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a9.jpg", "../ProcesoDigitalDeImagenes/imagenes-semitonos/a10.jpg"]
        
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

                let avg = Math.round((red+green+blue)/3)
                if(avg > 255) avg=255

                let ch=this.imagenes[Math.round((avg/255)*(this.imagenes.length-1))]
                this.auxcontext.clearRect(0, 0, this.tamano, this.tamano);

                await
                    new Promise((resolve) =>{
                        this.img.setAttribute("src",ch)

                        this.img.onload= ()=>{
                            console.log("entra")
                            this.auxcontext.drawImage(this.img, 0, 0, this.tamano, this.tamano);
                            this.imageData = this.auxcontext.getImageData(0, 0, this.aux2.width, this.aux2.height);
                            this.modelo.contextA.putImageData(this.imageData, this.ejeX, this.ejeY);
                            resolve(1)                            
                        }
                    })     
            
                this.ejeY = this.ejeY + this.n
            }
            this.ejeX = this.ejeX + this.m
            this.ejeY = 0
        }
        this.tamano;
        this.width = 0;
        this.height = 0;
        this.ejeX = 0
        this.ejeY = 0;
        this.m = 0;
        this.n = 0;
        
        //Aplicamos el filtro a la imagen.
        this.modelo.putImage(this.modelo.canvasA);
    }

    //Funciones auxiliar
    //Obtenemos el color de cada pixel
    getPixel(x, y, width) {
        let color = x * 4 + y * (width * 4)
        return { red: color, green: color + 1, blue: color + 2};
    }
}