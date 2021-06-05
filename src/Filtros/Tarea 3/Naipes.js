//Clase que implementa el filtro Imagen con Naipes
export default class Naipes{

    constructor(modelo){
        this.modelo = modelo
    }

    //Implementación del filtro Naipes
    naipes(palabra, pinta, frase){

        //Pasamos la imagen a tonos de gris
        this.gris();

        //Leemos los datos de la imagen.
        let ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor = ponPixel.data;

        let char = palabra;
        let fila;
        let out = [];
        
        let i;
        let average;
        let color;
        let cadena;
        
        //Implementación del filtro.
        for (var y = 0; y < ponPixel.height; y++) {
            fila = [];
            for (var x = 0; x < ponPixel.width; x++) {
                //Se obtiene el color de cada pixel.
                i = x * 4 + y * (ponPixel.width * 4)
                color = [valor[i], valor[i + 1], valor[i + 2]];

                average = Math.round((valor[i] + valor[i + 1] + valor[i + 2]) / 3);

                if (frase) cadena=char[(x+(y*ponPixel.width))%char.length];

                else if(average > 0 && average <= 19) cadena = 'A';
                else if(average >= 20 && average <= 38) cadena = 'B';
                else if(average >= 39 && average <= 57) cadena = 'C';
                else if(average >= 58 && average <= 76) cadena = 'D';
                else if(average >= 77 && average <= 95) cadena = 'E';
                else if(average >= 96 && average <= 114) cadena = 'F';
                else if(average >= 115 && average <= 133) cadena = 'G';
                else if(average >= 134 && average <= 152) cadena = 'H';
                else if(average >= 153 && average <= 171) cadena = 'I';
                else if(average >= 172 && average <= 190) cadena = 'J';
                else if(average >= 191 && average <= 209) cadena = 'K';
                else if(average >= 210 && average <= 228) cadena = 'L';
                else if(average >= 220 && average <= 256) cadena = 'M';

                if (!frase) {                    
                    if (!cadena) {
                        cadena = char[char.length - 1];
                    }
                }
                if (cadena == ' ') cadena = '&nbsp;';

                //Tomamos el color del pixel y se escribe la letra.
                if (pinta) fila.push("<span style=\"color:rgb(" + color.join(',') + ")\">" + cadena + "</span>");
            }
            
            fila.push('<br>');
            out.push(fila);
        }

        var outStr = '';

        var len = out.length;
        for (var j = 0; j < len; j++) {
            outStr += out[j].join('');
            outStr += '\n';
        }

        // Cambia el contenido HTML
        let salida = document.getElementById("cartas");
        salida.innerHTML = outStr;
    }

    //Función auxiliar para pasar a tonos de gris la imagen.
    gris(){
        //Leemos los datos de la imagen.
        var ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        var valor = ponPixel.data;
        //Implementación del filtro.
        for (var i = 0; i < valor.length; i += 4) {
            var gray = (valor[i]+valor[i+1]+valor[i+2])/3;
            valor[i] = gray;
            valor[i+1] = gray;
            valor[i+2] = gray;            
        }
        //Aplicamos el filtro a la imagen.
        this.modelo.contextA.putImageData(ponPixel, 0, 0);
        this.modelo.putImage(this.modelo.canvasA);
    }
}