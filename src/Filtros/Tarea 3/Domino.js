//Clase que implementa los filtro:
// Imagen con fichas de dominó blancas
// Imagen con fichas de dominó negras
export default class Domino {

    constructor(modelo) {
        this.modelo = modelo;
    }

    //Implementación del filtro dominó blanco
    dominoB(palabra, pinta, frase){

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

                else if(average > 0 && average <= 25) cadena = '1';
                else if(average >= 26 && average <= 50) cadena = '2';
                else if(average >= 51 && average <= 75) cadena = '3';
                else if(average >= 76 && average <= 100) cadena = '4';
                else if(average >= 101 && average <= 125) cadena = '5';
                else if(average >= 126 && average <= 150) cadena = '6';
                else if(average >= 156 && average <= 175) cadena = '7';
                else if(average >= 176 && average <= 200) cadena = '8';
                else if(average >= 201 && average <= 225) cadena = '9';
                else if(average >= 226 && average <= 256) cadena = '0';

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
        let salida = document.getElementById("dominoblanco");
        salida.innerHTML = outStr;
    }

    //Implementación del filtro dominó negro
    dominoN(palabra, pinta, frase){

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

                else if(average > 0 && average <= 25) cadena = '1';
                else if(average >= 26 && average <= 50) cadena = '2';
                else if(average >= 51 && average <= 75) cadena = '3';
                else if(average >= 76 && average <= 100) cadena = '4';
                else if(average >= 101 && average <= 125) cadena = '5';
                else if(average >= 126 && average <= 150) cadena = '6';
                else if(average >= 156 && average <= 175) cadena = '7';
                else if(average >= 176 && average <= 200) cadena = '8';
                else if(average >= 201 && average <= 225) cadena = '9';
                else if(average >= 226 && average <= 256) cadena = '0';

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
        let salida = document.getElementById("dominonegro");
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