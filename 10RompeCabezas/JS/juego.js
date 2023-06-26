/**/

var instrucciones = ["Utiliza las flechas para mover las piezas", " Ordenar las piezas hasta alcanzar la imagen objetivo"];

//

var movimientos = [];

//Vamos a crear una matriz que represente las posiciones del rompecabezas

var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//Necesito una variable para guardar la posición de la pieza vacía.

var filaVacia = 2;
var columnaVacia = 2;

//VAmos hacer una función para mostrar las instrucciones

function mostrarInstrucciones (instrucciones){
    for (var i = 0; i < instrucciones.length;i++){
        mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

//Vamos a crear una función para saber cuál fue el último movimiento

function agregarUltimoMov(direccion){
    movimientos.push(direccion);
}

//Una función para saber si ganó

function checarSiGano(){
    for (var i= 0; i < rompe.length; i++){
        for(var j = 0; j < rompe[i].length; j++){
            //comparar
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }

    return true;
}

//Función para mostrarlo
function mostrarCartelGanador(){
    if (checarSiGano()) {
        alert("Wiiii, ganaste. Punto extra");
    }
    return false;
}

//crear una función que se encargue del intercambio de posiciones del rompecabezas

/*arreglo [1][2] = arreglo[0][0]
arreglo[0][0] = arreglo[1][2]*/

function intercambioPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];

    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;

}

//Tengo que saber dónde está la vacía

function actualizarPosVacia(nuevaFila, nuevaColumna){

    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;

}

//Tenemos que crear una función que se encargue de saber si la posición es correcta

function posicionValida(fila, columna){
    return (fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

//Movimento que es por parte de las flechas, hay que identificar los movimientos, arriba 38, abajo 40, izquierda 37, derecha 39

function moverEnDireccion (direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;
    // Si se mueve hacia abajo
    if (direccion === codigosDireccion.ABAJO) {
        nuevaFilaPiezaVacia = filaVacia +1;
        nuevaColumnaPiezaVacia = columnaVacia;
     }
     //Si se mueve hacia arriba
     else if (direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia -1;
        nuevaColumnaPiezaVacia = columnaVacia;
     }
     //Izquierda
     else if (direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia -1;
     }
     //Derecha
     else if (direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia +1;
     }

     //Checar si la nueva posición es válida
     if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambioPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);

        //agregar el último mov
        agregarUltimoMov(direccion);
     }
}

//Aquí van codigos

var codigosDireccion = {
    IZQUIERDA : 37,
    DERECHA : 39,
    ARRIBA: 38,
    ABAJO : 40
}

function intercambioPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    intercambioPosicionesRompe(fila1, columna1, fila2, columna2);


    intercambiarPosicionesDOM(`pieza`+ pieza1, `pieza`+ pieza2);
}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    var padre = elementoPieza1.parentNode;

    var clonElemento1 = elementoPieza1.cloneNode(true);
    var clonElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(clonElemento1, elementoPieza2);
    padre.replaceChild(clonElemento2, elementoPieza1);
}

//nececito actualizar mov

function actualizarUltimoMov(direccion){
    var UltimoMov = document.getElementById(`flecha`);
    switch(direccion){

        case codigosDireccion.ARRIBA:
            UltimoMov.textContent=`↑`;
            break;
        case codigosDireccion.ABAJO:
            UltimoMov.textContent=`↓`;
            break;
        case codigosDireccion.DERECHA:
            UltimoMov.textContent=`→`;
            break;
        case codigosDireccion.IZQUIERDA:
            UltimoMov.textContent=`←`;
            break;

    }
}

//Crear función para mezclar

function mezclarPiezas(veces) {

    if (veces <= 0) {
        
        return;

    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];

    var direccion = direcciones[Math.floor(random()*direcciones.length)];

    moverDireccion(direccion);

    setTimeout(function(){
        mezclarPiezas(veces-1);
    },100);
    
}

//Capturar las teclas que ha ingresado el jugador

function CapturarTeclas(){
    document.body.onkeydown = (function(evento){
        if (evento.which === codigosDireccion.ABAJO ||
            evento.which === codigosDireccion.ARRIBA ||
            evento.which === codigosDireccion.DERECHA ||
            evento.which === codigosDireccion.IZQUIERDA) {

                moverDireccion(evento.which);
                actualizarUltimoMov(evento.which);

                var gano = checarSiGano;
                if (gano) {
                    setTimeout(function(){
                        mostrarCartelGanador();
                    },500);
                }
                evento.preventDefault;
            
        }
    });
}

function iniciar(){
    mezclarPiezas(30);
    CapturarTeclas();

}

//ejecutamos las funciones
iniciar();
mostrarInstrucciones(instrucciones);