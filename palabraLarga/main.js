const operacionPalabra = function() {
    const palabra01=document.getElementById("palabra01").value;
    const palabra02=document.getElementById("palabra02").value;
    const length01=palabra01.length;
    const length02=palabra02.length;
    let resultado="";



    if(length01>length02){
        dif=length01-length02;
        resultado = "La palabra " + palabra01 + " tiene " + dif + " letras mas que " + palabra02;
    }else if(length02>length01){
        dif=length02-length01;
        resultado = "La palabra " + palabra02 + " tiene " + dif + " letras mas que " + palabra01;
    }else{
        resultado = "Ambas palabras tienen la misma longitud.";
    }
    document.getElementById("resultado").innerHTML=resultado;
}