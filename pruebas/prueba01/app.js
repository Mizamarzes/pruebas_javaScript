function asyncOperation(id, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Operacion ${id} completada`)
        }, delay);
    });
}
const promises=[
    asyncOperation(1, 2000),
    asyncOperation(2, 4000),
    asyncOperation(3, 5000)
]

Promise.race(promises)
    .then(result => {
        console.log(result);
    })
    .catch(error =>{
        console.error(error);
    })