// Clase que implementa los siguientes filtros:
// Una sóla letra para formar la imagen
// Una sóla lotra en tonos de gris
// 16 letras ("MNH#QUAD0Y2$%+. ")
export default class Letras{

    //Constructor de la clase
    constructor(modelo){
        this.modelo = modelo;
    }

    //Implementación del filtro una letra para formar la imagen.
    colorM(palabra, pinta, frase) {

        //Leemos los datos de la imagen.
        let ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor = ponPixel.data;
        
        let char = palabra;
        let fila;
        let out = [];

        let i;
        let color;
        let cadena;

        //Implementación del filtro.
        for (let y = 0; y < ponPixel.height; y++) {
            fila = [];
            for (let x = 0; x < ponPixel.width; x++) {
                //Se obtiene el color de cada pixel.
                i = x * 4 + y * (ponPixel.width * 4);
                color = [valor[i], valor[i+1], valor[i+2]];

                if (!frase) {
                    if (!cadena) {
                        cadena = char[char.length - 1];
                    }
                }

                if (pinta) {
                    //Tomamos el color del pixel  y se escribe la letra.
                    fila.push("<span style=\"color:rgb(" + color.join(',') + ")\">" + cadena + "</span>");
                }
                
            }

            fila.push('<br>');
            out.push(fila);
            
        }

        var salida = '';

        var len = out.length;
        for (let j = 0; j < len; j++) {
            salida += out[j].join('');
            salida += '\n';            
        }

        // Cambia el contenido HTML.
        let output = document.getElementById("palabra");
        output.innerHTML = salida;
    }

    //Implementación del filtro una sóla letra en tonos de gris.
    colorG(palabra, pinta, frase) {

        //Primero pasamos a tonos de gris la imagen.
        this.gris();

        //Leemos los datos de la imagen.
        let ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor = ponPixel.data;

        let char = palabra;
        let fila;
        let out = [];

        let i;
        let color;
        let cadena;

        //Implementación del filtro.
        for (let y = 0; y < ponPixel.height; y++) {
            fila = [];
            for (let x = 0; x < ponPixel.width; x++) {
                //Se obtiene el color de cada pixel.
                i = x * 4 + y * (ponPixel.width * 4);
                color = [valor[i], valor[i+1], valor[i+2]];

                if (!frase) {
                    if (!cadena) {
                        cadena = char[char.length - 1];
                    }
                }

                if (pinta) {
                    //Tomamos el color del pixel y se escribe la letra.
                    fila.push("<span style=\"color:rgb(" + color.join(',') + ")\">" + cadena + "</span>");
                }
                
            }

            fila.push('<br>');
            out.push(fila);
            
        }

        var salida = '';

        var len = out.length;
        for (let j = 0; j < len; j++) {
            salida += out[j].join('');
            salida += '\n';            
        }

        // Cambia el contenido HTML.
        let output = document.getElementById("palabra");
        output.innerHTML = salida;
    }

    //Implementaión del filtro 16 letras ("MNH#QUAD0Y2$%+. ")
    letras16(palabra, pinta) {

        //Leemos los datos de la imagen.
        let ponPixel = this.modelo.nuevoCtx.getImageData(0, 0, this.modelo.nuevoCanvas.width, this.modelo.nuevoCanvas.height);
        let valor = ponPixel.data;

        let char = palabra;
        let fila;
        let out = [];

        let i;
        let color;
        let average;

        //Implementación del filtro.
        for (let y = 0; y < ponPixel.height; y++) {
            fila = [];
            for (let x = 0; x < ponPixel.width; x++) {
                //Se obtiene el color de cada pixel.
                i = x * 4 + y * (ponPixel.width * 4);
                color = [valor[i], valor[i+1], valor[i+2]];
                
                average = Math.round((valor[i] + valor[i + 1] + valor[i + 2]) / 3);

                if(average > 0 && average <= 31) char = 'M';
                else if(average >= 16 && average <= 31) char = 'N';
                else if(average >= 32 && average <= 47) char = 'H';
                else if(average >= 48 && average <= 63) char = '#';
                else if(average >= 64 && average <= 79) char = 'Q';
                else if(average >= 80 && average <= 95) char = 'U';
                else if(average >= 96 && average <= 111) char = 'A';
                else if(average >= 112 && average <= 127) char = 'D';
                else if(average >= 128 && average <= 143) char = '0';
                else if(average >= 144 && average <= 159) char = 'Y';
                else if(average >= 160 && average <= 175) char = '2';
                else if(average >= 176 && average <= 191) char = '$';
                else if(average >= 192 && average <= 209) char = '%';
                else if(average >= 210 && average <= 225) char = '+';
                else if(average >= 226 && average <= 239) char = '.';
                else if(average >= 240 && average <= 255) char = ' ';

                if (char == ' ') {
                    char = '&nbsp;';
                }

                if (pinta) {
                    //Tomamos el color del pixel y se escribe la letra.
                    fila.push("<span style=\"color:rgb(" + color.join(',') + ")\">" + char + "</span>");
                } else {
                    fila.push("<span>" + char + "</span>");
                }
                
            }

            fila.push('<br>');
            out.push(fila);
            
        }

        var salida = '';

        var len = out.length;
        for (let j = 0; j < len; j++) {
            salida += out[j].join('');
            salida += '\n';            
        }

        // Cambia el contenido HTML.
        let output = document.getElementById("palabra");
        output.innerHTML = salida;
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