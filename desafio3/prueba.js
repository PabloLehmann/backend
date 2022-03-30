const http = require ("http")


const server = http.createServer((peticion, respuesta)=>{
    respuesta.end("hola mundoooo")
})
const connectedServer = server.listen(8080, ()=>{
    console.log(`Servidor http escuchando desde el puerto ${connectedServer.address().port}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))