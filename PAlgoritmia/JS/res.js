function validar(formulario){
    if(formulario.P1.lenght<=0){
        alert("Escriba alguna cantidad de dinero invertido");
        formulario.P1.focus();
    }

    

    var checkok = "0123456789" + "0123456789";

    var checkString = formulario.P1.value;

    var todoesValido = true;
    //alert("hi");

    for(var i = 0; i < checknume.length; i++){
        var ch = checknume.charAt(i);
        for (var j = 0; j < checkok.length; j++){
            if (ch == checkok.charAt(j)){
                break;
            }

        }
        if (j == checkok.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo");
        formulario.P1.focus();
        return false;
    }
}