// Clase que implementa poner un frase para formar la imagen 
export default class Frase {

    //Constructor de la clase
    constructor(modelo) {
        this.modelo = modelo;
    }

    //Implementación del filtro Frase
    frase(palabra, pinta, frase){
        
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
        for (var y = 0; y < ponPixel.height; y++) {
            fila = [];
            for (var x = 0; x < ponPixel.width; x++) {
                //Se obtiene el color de cada pixel.
                i = x * 4 + y * (ponPixel.width * 4)
                color = [valor[i], valor[i + 1], valor[i + 2]];

                if (frase) cadena=char[(x+(y*ponPixel.width))%char.length];
                
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
}