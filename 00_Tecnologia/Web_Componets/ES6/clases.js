class Libro{
    constructor(autor,titulo){
        this.autor=autor
        this.titulo=titulo
    }
}

class LibroTecnico extends Libro{
    constructor(autor, titulo, tematica, paginas,precio){
        super(autor,titulo)
        this.tematica=tematica
        this.paginas=paginas
        this.capitulo=""
        this.precio=precio
    }

    calculaPrecio(pValor=1){
        this.precio*=pValor
        console.log(this)
    }
}

olibro=new LibroTecnico("pepe","angular","informatica",200,30)
olibro.Editorial="Espasa"
olibro.calculaPrecio(36)