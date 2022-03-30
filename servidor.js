const express = require ("express")
const app = express()
//const productos = require ("../desafio2/productos")
const Container = require ("./desafio2/desafio2")
//console.log(productos);

const nuevoProducto = new Container ("./desafio2/productos.txt")
//const productosString = JSON.stringify(productos)
//const productosString= prod.escribir(JSON.stringify(productos))


const prodRandom = async()=>{
    let nrm = Math.floor(Math.random()*6)
    let producto = await nuevoProducto.leerPorId(nrm)
    let prodString = JSON.stringify(producto)
    console.log(prodString);
    return prodString
}
    
const stock = async()=>{
    let arrayProd = await nuevoProducto.leer()
    return arrayProd
}



app.get("/productos",(req,res) =>{
    stock().then (productos =>  res.send(`Los productos disponible son: ${productos}`))

})
app.get("/productoRandom", (req, res) =>{
   prodRandom().then(productosR => res.send(`Producto random: ${productosR} `))

})


const PORT= 8080
const server= app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando desde el puerto ${server.address().port}`);

})
server.on("error", error => console.log(`Error en el servidor ${error}`))