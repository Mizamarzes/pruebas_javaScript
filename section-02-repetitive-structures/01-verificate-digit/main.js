const iniciar = function () {
    let lista = ["201012341-3"]
    localStorage.setItem("data", JSON.stringify(lista));
}

const listados = function () {
    var data = JSON.parse(localStorage.getItem("data"));
    let boton = document.getElementById("button3").textContent

    if(boton == "Show"){
        document.getElementById("listado").innerHTML = data;
        document.getElementById("button3").innerHTML = "Hide";
    }else{
        document.getElementById("button3").innerHTML = "Show";
        document.getElementById("listado").innerHTML = "Click to display";
    }
}

const repetido = function () {
    let numberVerificador = (document.getElementById("number-vef").value);
    var data = JSON.parse(localStorage.getItem("data"));

    let td = data.length;
    let invertida = "";
    let multi = "";
    let modulo = 0;
    let lista = []
    lista = data;


    invertida = (invertirCadena(numberVerificador));

    multi = (multiplicar(invertida));
    modulo = multi % 11;
    resultado = 11 - modulo;
    console.log(resultado);
    let pos = lista.includes(numberVerificador + "-" + resultado)
    console.log(pos)
    if (pos == true) {
        alert("the number is repeated")
    }
    else {
        alert("the number is not repeated")
    }
}
const verificar = function () {
    let numberVerificador = (document.getElementById("number-vef").value);
    var data = JSON.parse(localStorage.getItem("data"));

    let td = data.length;
    let invertida = "";
    let multi = "";
    let modulo = 0;
    let lista = []
    lista = data;

    invertida = (invertirCadena(numberVerificador));

    multi = (multiplicar(invertida));
    modulo = multi % 11;
    resultado = 11 - modulo;
    console.log(resultado);
    let pos = lista.includes(numberVerificador + "-" + resultado)
    console.log(pos)
    if (pos == true) {
        console.log("repetido");
        alert("el numero esta repetido")
    }
    else {
        document.getElementById("resultado").innerHTML = numberVerificador + "-" + resultado;
        lista[td] = numberVerificador + "-" + resultado;
        console.log(data);

    }
    localStorage.setItem("data", JSON.stringify(lista));
}

function invertirCadena(cad) {
    var separarCadena = cad.split("");
    var invertirArreglo = separarCadena.reverse();
    var unirArreglo = invertirArreglo.join("");
    return unirArreglo;
}

function multiplicar(cad) {
    let n = 0;
    let j = 1;
    let suma = 0;
    var separarCadena = cad.split("");
    n = separarCadena.length
    for (let i = 0; i <= n - 1; i++) {
        j = j + 1;
        if (j > 7) {
            j = j - 6;
        }
        suma = parseFloat(cad[i]) * j + suma;
    }
    return suma;
}