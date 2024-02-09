const horaActual = document.querySelector("horaActual")
const cantidadHoras=document.querySelector("cantH")
const horaFutura=(horaActual+cantidadHoras)%12;

console.log("Hora futura es: ", horaFutura);
