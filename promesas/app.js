const empleados=[
    {
        id:1,
        nombre:"Camilo"
    },
    {
        id:2,
        nombre:"Maria"

    },
    {
        id:3,
        nombre:"Pedro"
    }
]
const salarios=[
    {
        id:1,
        salario:1000
    },
    {
        id:2,
        salario:2000

    }    
]

const getEmpleado = ( id ) =>{
    return new Promise(( resolve, reject )=>{
        const empleado=empleados.find( e=>e.id===id )?.nombre;
        ( empleado )
            ? resolve( empleado )
            : reject ( `there is no employment with that id: ${id}`);
    })
}

const getSalario=()=>{
    return new Promise(( resolve, reject )=>{
        const salario=salarios.find( s=>s.id===id )?.salario;
        ( salario )
            ? resolve( salario )
            : reject ( `There is no salary with that id: ${id}`);
    })
}
const id=2;
let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre=empleado;
        return getSalario( id )
    })
    .then( salario => console.log ( `The employment: ${nombre} has a salary of: ${salario}`))
    .catch( err => console.log( err ));
