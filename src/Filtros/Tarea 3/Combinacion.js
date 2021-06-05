// Clase que implementa los siguientes filtros:
// Letra con color + 16 letras ("MNH#QUAD0Y2$%+. ")
// Letra en tonos de gris + 16 letras ("MNH#QUAD0Y2$%+. ")
export default class Combinacion {

    //Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    //Implementación del filtro Letra con color + 16 letras ("MNH#QUAD0Y2$%+. ")
    colores16(palabra, pinta, frase){
        
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

                else if(average > 0 && average <= 31) cadena = 'M';
                else if(average >= 16 && average <= 31) cadena = 'N';
                else if(average >= 32 && average <= 47) cadena = 'H';
                else if(average >= 48 && average <= 63) cadena = '#';
                else if(average >= 64 && average <= 79) cadena = 'Q';
                else if(average >= 80 && average <= 95) cadena = 'U';
                else if(average >= 96 && average <= 111) cadena = 'A';
                else if(average >= 112 && average <= 127) cadena = 'D';
                else if(average >= 128 && average <= 143) cadena = '0';
                else if(average >= 144 && average <= 159) cadena = 'Y';
                else if(average >= 160 && average <= 175) cadena = '2';
                else if(average >= 176 && average <= 191) cadena = '$';
                else if(average >= 192 && average <= 209) cadena = '%';
                else if(average >= 210 && average <= 225) cadena = '+';
                else if(average >= 226 && average <= 239) cadena = '.';
                else if(average >= 240 && average <= 255) cadena = ' ';

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

        // Cambia el contenido HTML.
        let salida = document.getElementById("palabra");
        salida.innerHTML = outStr;
    }

    //Implementación del filtro Letra con tonos de gris + 16 letras ("MNH#QUAD0Y2$%+. ")
    gris16(palabra, pinta, frase){

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

                else if(average > 0 && average <= 31) cadena = 'M';
                else if(average >= 16 && average <= 31) cadena = 'N';
                else if(average >= 32 && average <= 47) cadena = 'H';
                else if(average >= 48 && average <= 63) cadena = '#';
                else if(average >= 64 && average <= 79) cadena = 'Q';
                else if(average >= 80 && average <= 95) cadena = 'U';
                else if(average >= 96 && average <= 111) cadena = 'A';
                else if(average >= 112 && average <= 127) cadena = 'D';
                else if(average >= 128 && average <= 143) cadena = '0';
                else if(average >= 144 && average <= 159) cadena = 'Y';
                else if(average >= 160 && average <= 175) cadena = '2';
                else if(average >= 176 && average <= 191) cadena = '$';
                else if(average >= 192 && average <= 209) cadena = '%';
                else if(average >= 210 && average <= 225) cadena = '+';
                else if(average >= 226 && average <= 239) cadena = '.';
                else if(average >= 240 && average <= 255) cadena = ' ';

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

        // Cambia el contenido HTML.
        let salida = document.getElementById("palabra");
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