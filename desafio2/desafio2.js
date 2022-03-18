const fs = require ("fs")

class Container{
    constructor(filename){
        this.filename = filename

    }
    async escribir(dato){
        try{
           const contenido= await fs.promises.writeFile(this.filename, dato)
           return contenido 
           console.log("escrito correctamente");
        } catch(error){
            console.log(error);
        }
    }

    async borrar(){
        try{
            await fs.promises.writeFile(this.filename,"[]")
            console.log("Contenido borrado");

        }catch(error){
            throw new Error(error)
        }
    }

    async leer(){
        try{
        let contenido = await fs.promises.readFile(this.filename, "utf-8")
         return contenido;

        }catch(error){
            throw new Error(error);
        }
    }

    async leerPorId(id){
        try{
            const contenido = await this.leer()
            const contenidoParseado = JSON.parse(contenido)
            //return contenidoParseado[id-1]
            //console.log(contenido);
            const elemento = contenidoParseado.filter(e => e.id===id)
            return elemento
        }catch(error){
            throw new Error(error)
        }
    }

    async borrarPorId(id){
        try{
            const contenido = await this.leer()
            const contenidoParseado = JSON.parse(contenido)
            //return contenidoParseado[id-1]
            //console.log(contenido);
            const elementos = contenidoParseado.filter(e => e.id!==id)
            await this.escribir(JSON.stringify( elementos))
            const nuevoContenido = await this.leer()
            return nuevoContenido
        }catch(error){
            throw new Error(error)
        }
    }
    async guardarProducto(obj){
        try{
            const contenido = await this.leer()
            let contenidoParseado = JSON.parse(contenido)
            let ultimoId=0
            let contador = contenidoParseado.length

            if(contador!==0){
                ultimoId = contenidoParseado[contador-1].id
            }
            obj.id = ultimoId + 1
            contenidoParseado.push(obj)
            contenidoParseado = JSON.stringify(contenidoParseado)
            await fs.promises.writeFile(this.filename, contenidoParseado)
            return obj["id"]

        }catch(error){
            throw new Error(error)
        }
    }
   


}
module.exports = Container;

