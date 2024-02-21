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
            getCliente(factura.clienteId)
                .then(cliente => {
                    return calcularTotalFactura(factura.productos)
                        .then(total => {
                            factura.total = total;
                            resolve({
                                factura,
                                cliente,
                                productos: factura.productos
                            });
                        });
                })
                .catch(reject);
        }else{
            reject(`Facture with id: ${facturaId} doesn't exist`);
        }
    });
};

const facturaId= 1001;

obtenerInformacionFactura(facturaId)
    .then(infoFactura => {
        console.log("Información de la factura:");
        console.log("Cliente:", infoFactura.cliente);
        console.log("Productos:", infoFactura.productos);
        console.log("Total de la factura:", infoFactura.factura.total);
    })
    .catch(error => {
        console.error("Error al obtener información de la factura:", error);
    });