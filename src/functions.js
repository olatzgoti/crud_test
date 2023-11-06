let productos = [
    {
        id: 1,
        nombre: "Manzana",
        peso: "100g",
        cantidad: 10,
    },
    {
        id: 2,
        nombre: "Plátano",
        peso: "150g",
        cantidad: 15,
    },
    {
        id: 3,
        nombre: "Naranja",
        peso: "200g",
        cantidad: 20,
    }
];
console.log(productos);

function getAll()
{
    return productos;
};

function getById()
{
    return productos.find((producto) => { producto.id === id })
};


function createProduct(nombre, peso, cantidad) {
    let producto = 
    { 
        id: productos.length + 1,
        nombre, 
        peso, 
        cantidad 
    };
    productos.push(producto);
}



function updateProduct(id, nombre, peso, cantidad) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productos[i].nombre = nombre;
            productos[i].peso = peso;
            productos[i].cantidad = cantidad;
            return productos[i];
        }
    }
    
}

function deleteProduct(id) {
    productos = productos.filter((producto) => producto.id !== id);
}



export{
    
    createProducto,

}