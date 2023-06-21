function validarn (e){
    var teclado = (document.all)?e.keyCode : e.which; 

    if (teclado == 8) return true;

    var patron = /[0-9\d .]/; 

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function validarp(e) {
  var teclado = (document.all) ? e.keyCode : e.which;
  
  if (teclado == 8) return true;
  
  var patron = /[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s,]/;
  
  var codigo = String.fromCharCode(teclado);
  
  return patron.test(codigo);
  }
  


function problema2(){
    //Lo primero que necesitamos es obtener los campos de texto

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //Construimos el vector

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];

    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //Odernar los vectores

    v1 = v1.sort(function(a,b){
        return b-a;
    })

    v2 = v2.sort(function(a,b){
        return b-a;
    })

    //Se realiza el producto escalar

    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }
    document.querySelector('#p2-output').textContent = 'Producto Escalar Mínimo: ' + p2_producto;
}

function problema3() {
    var input = document.getElementById("p3-input").value;
    var palabras = input.split(",");
    var resultado = "";
  
    palabras.forEach(function (palabra) {
      var caracteresUnicos = contarCaracteresUnicosEnPalabra(palabra);
      resultado += palabra + " = " + caracteresUnicos.length + " (" + caracteresUnicos.join("") + ")\n";
    });
  
    document.getElementById("p3-output").innerText = resultado.trim();
  }
  
  function contarCaracteresUnicosEnPalabra(palabra) {
    var caracteres = palabra.toUpperCase().split("");
    var caracteresUnicos = [...new Set(caracteres)];
    return caracteresUnicos;
  }

  function problema1() {
    // Obtener el valor del input
    const inputElement = document.getElementById('p1-input');
    const inputValue = inputElement.value.trim();
  
    // Obtener el elemento de salida
    const outputElement = document.getElementById('p1-output');
  
    // Verificar si se ingresó un valor
    if (inputValue !== '') {
      // Dividir las palabras en un arreglo y revertir el orden
      const words = inputValue.split(' ').reverse();
  
      // Unir las palabras en una cadena nuevamente
      const reversedWords = words.join(' ');
  
      // Mostrar el resultado en el elemento de salida
      outputElement.textContent = reversedWords;
    } else {
      // Mostrar mensaje de error si no se ingresó ningún valor
      outputElement.textContent = 'Error: Ingresa las palabras separadas por un espacio.';
    }
  }