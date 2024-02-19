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

const getClient=(id, callback)=>{
    const client=clientes.find(x=>x.id===id)?.nombre;
    if(client){
        callback(null,client);
    }else{
        callback(`Client with the id ${id} not exist`);
    }
};

const getProduct=(id,callback)=>{
    const product=productos.find(s=>s.id===id)?.product
    if(product){
        callback(null,product);
    }else{
        callback(`The products'id ${id} not exist`);
    }
};

const totalFacture=(products,facturaProductos, callback)=>{
    let total=0;
    facturaProductos.forEach(productoId=>{
        const product=products.find(p=>p.id===productoId);
        if(product){
            total+= product.precio
        }
    });
    callback(total)
};

const facturaProductos = facturas[0].productos; 
totalFacture(productos, facturaProductos, total => {
    console.log("Total de la factura:", total);
});

const infoFacture=(factureId, callback)=>{
    const factureIdNumber=facturas.find(k=>k.id===factureId)?.factureIdNumber;
    if(factureIdNumber){
        callback(null,factureIdNumber)
    }else{
        callback(`Not exist the facture'id, id: ${id}`);
    }
}