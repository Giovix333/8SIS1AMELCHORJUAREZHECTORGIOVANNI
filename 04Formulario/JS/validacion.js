//JS es miltiparadígmico y vamos a iniciar a la programación por funciones.

function validar(formulario){
    //Hay varias formas para poder obtener los parámetros del formulario.
    if(formulario.nombre.value.length <= 3){
        alert("Escriba más de tres caracteres en el campo nombre")
        formulario.nombre.focus();
    }
}