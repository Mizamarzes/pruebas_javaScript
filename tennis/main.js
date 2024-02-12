const operacionTennis = function() {
    const playerA=parseFloat(document.getElementById("ganadosA").value);
    const playerB=parseFloat(document.getElementById("ganadosB").value);
    
    if(playerA>playerB){
        dif=playerA-playerB;
    }else{
        dif=playerB-playerA;
    }

    if (playerA > playerB && playerA <= 7 && dif === 2) {
        resultado="Jugador A ganó";
    } else if (playerB > playerA && playerB <= 7 && dif === 2) {
        resultado="Jugador B ganó";
    } else if (playerA <= 6 && playerB <= 6 && dif < 2) {
        resultado="El set no ha terminado";
    } else if ((playerA >= 7 || playerB >= 7) && dif > 2) {
        resultado="Resultado inválido";
    }
    
    document.getElementById("resultado").innerHTML=resultado;

}