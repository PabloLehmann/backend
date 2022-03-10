class Persona  {
    constructor (nombre, apellido, libro, mascota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = libro;
        this.mascota = mascota;
    }
    getFullName(){
        
       console.log (`El nombre es ${this.nombre} ${this.apellido}`)
    }
    addMascota(nombre){
        this.mascota.push(nombre)
    }
    countMascotas(){
        const cant = this.mascota.length
        console.log("Tiene "+cant+" mascotas!")
    }
    addBook(libro, autor){
        this.libro.push({libro:libro, autor:autor})

    }
    getBook(){
     let nombreLibro = this.libro.map(nombre=>
                  nombre.libro

    )
        console.log(nombreLibro);
    }
    
}



const personas = new Persona("Jorge", "Valle", [{libro:"locura", autor:"Josefo"}, {libro: "fantasma",autor:"Andrei"}], ["perro", "gato"])


personas.getFullName()
personas.addMascota("loro")
console.log(personas.mascota);
personas.countMascotas()
personas.addBook("Tumba", "Mariel")
console.log(personas.libro);
personas.getBook()