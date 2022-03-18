const Container = require ("./desafio2");
const Productos = require ("./productos")

/* let contenedor = new Container ("./texto.txt")
contenedor.escribir("Esribiendo un texto") */

const nuevoContenedor = new Container ("./productos.txt")
//nuevoContenedor.escribir(JSON.stringify (Productos))
//nuevoContenedor.borrar()
//console.log(Productos);
const main = async ()=>{

//console.log(await nuevoContenedor.leer())
//console.log(await nuevoContenedor.leerPorId(2))
//console.log(await nuevoContenedor.borrarPorId(2))
 console.log(await nuevoContenedor.guardarProducto(  {
    titulo: "televisor",
    precio: 42000,
    thumbnail:"url"
}))
}
main()
