function operacionAsincrona(x,y,callback){
    const resultado=x+y;
    callback(resultado);
}

operacionAsincrona(5,10,function(rta){
    console.log(rta)
});

// self-executing function
(function (x,y){
    const rta=x-y
    console.log("substract is: "+rta)
})(10,5);

//function expression
const func1=function(){
    return "traditional function.";
    };

    const func2=() =>{
        return "Funcion flecha.";
    }

    const multiply=(a,b) =>{
        return a*b;
    }

    console.log(multiply(5,10));

    function printResult(rta){
        console.log("Result is: "+rta)
    }

    const multiply2=(a,b,z)=>{
        const rta=a*b;
        z(rta);
        return z;
    };

    const a= multiply2(100,5,printResult);
