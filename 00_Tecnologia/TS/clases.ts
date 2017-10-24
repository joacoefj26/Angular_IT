interface DatosLibros{
    tematica:string;
    paginas:number;
    precio:number;
    cantidadPagina();
}



class Libro{
    public autor : string;
    protected titulo : string;
    constructor(autor:string,titulo:string){
        this.autor=autor;
        this.titulo=titulo;
    }
}

class Libro2{
    constructor(public autor:string, public titulo:string){
    }
}

class LibroTecnico extends Libro implements DatosLibros{

    tematica:string;
    paginas:number;
    precio:number;
    public capitulo:Array<string>;

    constructor(autor:string, titulo:string, tematica:string, paginas:number,precio:number){
        super(autor,titulo);
        this.tematica=tematica;
        this.paginas=paginas;
        this.capitulo=[];
        this.precio=precio;
    }

    cantidadPagina(){
        return this.paginas;
    }

    calculaPrecio(pValor=1){
        this.precio*=pValor;
        console.log(this);
    }
}

let olibro=new LibroTecnico("pepe","angular","informatica",200,30);
//olibro.Editorial="Espasa"
olibro.calculaPrecio(36);
//olibro.cantidadPagina()