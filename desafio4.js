//import express from "express";
const express = require ("express")
const app = express()

const routerProductos = express.Router()
app.use("/productos", routerProductos)
routerProductos.use(express.json())
routerProductos.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


//---------------------------------------------
    const producto = [
        {
            titulo: "Heladera",
            precio: 12000,
            id: 1,
            thumbnail:"url"
        },
        {
            titulo: "Calefon",
            precio: 22000,
            id: 2,
            thumbnail:"url"
        },
        {
            titulo: "Horno",
            precio: 15000,
            id: 3,
            thumbnail:"url"
        },
]
routerProductos.get("/", (req, res) =>{
    res.json(producto)
})

routerProductos.get("/:id", (req, res)=>{
    const {id} = req.params
    let prodBuscado = producto.find(p => p.id == id)
    if(id <= producto.length ){
    res.json(prodBuscado)}else{
        res.json("Producto no encontrado")
    }
})

routerProductos.post("/", (req, res)=>{
    const nuevoProd = req.body
    producto.push(nuevoProd)
    let id = producto.indexOf(nuevoProd)
    nuevoProd.id = id + 1
    res.json(nuevoProd)
})
routerProductos.put("/:id", (req, res)=>{
    const {id} = req.params
    let prodBuscado = producto.find(p => p.id == id)
    const {precio} = req.body
    prodBuscado.precio = precio
    res.json(prodBuscado)
})
routerProductos.delete("/:id", (req, res)=>{
    const {id} = req.params
    let prodBuscado = producto.find (p => p.id == id)
    producto.splice(producto.indexOf(prodBuscado), 1)
    res.json(producto)
})




//---------------------------------------------
const PORT= 8080
const server= app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando desde el puerto ${server.address().port}`);

})
server.on("error", error => console.log(`Error en el servidor ${error}`))