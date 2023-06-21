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

    if (isNaN(valor) || isNaN(resul)) {
        alert("Ingresa valores numéricos válidos");
        return;
      }

    document.formulario.sueldoI.value = "$" + total;
}
function borrar(){
    document.formulario.sueldoI.value = " ";
    document.formulario.cantidad.value = " "; 
    
}

//2
function comi(){
    var ven1 = document.formulario.comision1.value;
    var ven2 = document.formulario.comision2.value;
    var ven3 = document.formulario.comision3.value;
    var comis = parseInt(ven1,ven2,ven3);
    var com1 = ven1*0.10;
    var com2 = ven2*0.10;
    var com3 = ven3*0.10;
    var pago = com1+com2+com3+10000; 

    if (isNaN(ven1) || isNaN(ven2) || isNaN(ven3)) {
        alert("Ingresa valores numéricos válidos");
        return;
      }

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
    if (isNaN(produ) || isNaN(decu)) {
        alert("Ingresa valores numéricos válidos");
        return;
      }
}

function borrar2(){
    document.formulario.pd.value = " ";
    document.formulario.totald.value = " ";

}

//5
function porce() {
    var hombres = parseFloat(document.formulario.hom.value);
    var mujeres = parseFloat(document.formulario.muj.value);
    var totalEstudiantes = hombres + mujeres;
    var porcentajeHombres = (hombres / totalEstudiantes) * 100;
    var porcentajeMujeres = (mujeres / totalEstudiantes) * 100;

    if (isNaN(hombres) || isNaN(mujeres)) {
        alert("Ingresa valores numéricos válidos");
        return;
      }
  
    document.formulario.homp.value = porcentajeHombres.toFixed(5) + "%";
    document.formulario.mujp.value = porcentajeMujeres.toFixed(5) + "%";
  }

  function borrar4(){
    document.formulario.hom.value = " ";
    document.formulario.muj.value = " ";
    document.formulario.homp.value = " ";
    document.formulario.mujp.value = " ";

}

//6
function edadcal() {
    var años = parseInt(document.formulario.añon.value);
    var totalaños = 2023 - años
    
    if (isNaN(años)) {
        alert("Ingresa valores numéricos válidos");
        return;
      }

    document.formulario.edadt.value = "Tiene " + totalaños + " años"; 
  }

  function borrar5(){
    document.formulario.añon.value = " ";
    document.formulario.edadt.value = " ";
    

  }