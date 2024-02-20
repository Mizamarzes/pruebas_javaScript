const clientes = [
    {
        id: 1,
        nombre: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        nombre: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

const productos = [
    {
        id: 101,
        nombre: "Producto 1",
        precio: 50
    },
    {
        id: 102,
        nombre: "Producto 2",
        precio: 75
    },
    {
        id: 103,
        nombre: "Producto 3",
        precio: 100
    }
];

const facturas = [
    {
        id: 1001,
        clienteId: 1,
        productos: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clienteId: 2,
        productos: [103],
        total: 0
    }
];


const getCliente=( id )=>{
    return new Promise(( resolve, reject)=>{
        const cliente=clientes.find( c=>c.id===id)?.nombre;
        ( cliente )
            ? resolve( cliente )
            : reject ( `There is no client with that id: ${id}`);
    })
}

const getProducto= ( id ) =>{
    return new Promise(( resolve, reject )=>{
        const producto=productos.find( p=>p.id===id )?.producto;
        ( producto )
            ? resolve ( producto )
            : reject ( `There is no product with that id: ${id}`)
    })
}

function calcularTotalFactura( productos ){
    return new Promise(( resolve, reject ) => {
        const prices = productos.map(producto=> producto.precio);
        if(prices.length>0){
            resolve(prices);
        }else{
            reject("No products found");
        }
    })
}

const obtenerInformacionFactura = ( facturas ) =>{
    return new Promise (( resolve, reject )=>{
        const factura = facturas.find(f=>f.id===facturaId)
        if(factura){
            const facturaClienteid=getCliente(factura.clienteId)
            if(facturaClienteid){
                const facturaProductsClient = calcularTotalFactura(factura.productos)
                if (facturaProductsClient){
                    //adsadsadsadasdasdasdsa
                }else{
                    console.log("Products don't exist")
                }
            }else{
                console.log(`Id'client of facture: ${facturaId} doesn't exist`)
            }
        }else{
            reject(`Facture with id: ${facturaId} doesn't exist`)
        }
    })
}

const facturaId= 1001;