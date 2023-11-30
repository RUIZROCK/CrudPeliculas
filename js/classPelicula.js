export class Pelicula{
    #codigo
    #titulo
    #descripcion
    #url
    #genero
    constructor(codigo = uuidv4(),titulo,descripcion,url,genero){
        this.#codigo=codigo
        this.#titulo=titulo
        this.#descripcion=descripcion
        this.#url=url
        this.#genero=genero
    }

    get codigo(){
        return this.#codigo
    }
    set codigo(codigo){
        this.#codigo=codigo
    }

    get titulo(){
        return this.#titulo
    }
    set titulo(titulo){
        this.#titulo=titulo       
    }

    get descripcion(){
        return this.#descripcion
    }
    set descripcion(descripcion){
        this.#descripcion=descripcion   
    }

    get url(){
        return this.#url
    }
    set url(url){
        this.#url=url    
    }

    get genero(){
        return this.#genero
    }
    set genero(genero){
        this.#genero=genero    
    }

    toJSON(){
        return{
            codigo:this.#codigo,
            titulo:this.#titulo,
            descripcion:this.#descripcion,
            url:this.#url,
            genero:this.#genero
        }
    }
}