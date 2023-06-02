//1
function validarn (e){
    var teclado = (document.all)?e.keyCode : e.which; 

    if (teclado == 8) return true;

    var patron = /[0-9\d .]/; 

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes(){
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul*0.02;
    var total = interes + resul;

    document.formulario.sueldoI.value = "$" + total;
}
function borrar(){
    document.formulario.sueldoI.value = " ";
    document.formulario.cantidad.value = " "; 
    
}

//2
function validarn (e){
    var teclado = (document.all)?e.keyCode : e.which; 

    if (teclado == 8) return true;

    var patron = /[0-9\d .]/; 

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function comi(){
    var ven1 = document.formulario.comision1.value;
    var ven2 = document.formulario.comision2.value;
    var ven3 = document.formulario.comision3.value;
    var comis = parseInt(ven1,ven2,ven3);
    var com1 = ven1*0.10;
    var com2 = ven2*0.10;
    var com3 = ven3*0.10;
    var pago = com1+com2+com3+10000; 

    document.formulario.venta.value = "$" + pago;

}

function borrar1(){
    document.formulario.comision1.value = " ";
    document.formulario.comision2.value = " "; 
    document.formulario.comision3.value = " ";
    document.formulario.venta.value = " ";

}

//3
function des(){
    var produ = document.formulario.pd.value;
    var decu = parseInt(desc);
    var desc = produ*0.15;
    var pdt = produ-desc;

    document.formulario.totald.value = "$" + pdt;
}

function borrar2(){
    document.formulario.pd.value = " ";
    document.formulario.totald.value = " ";

}