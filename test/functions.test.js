import { createProducto } from "../src/functions";


const products = [];

test("Prueba para la creación de producto",()=>{

    const nuevoProducto = createProducto("olivas", 20, 200); 

    expect(nuevoProducto).toEqual({
        id: 1,
        nombre:"olivas",
        peso: 20, 
        cantidad: 200
    })



})