class Item{
    constructor(texto){
        this._cod = Object.freeze(parseInt(localStorage.getItem('codMaximo')))
        this._texto = texto
        this._data = new Date()
    }

    get cod(){
        return this._cod
    }

    get texto(){
        return this._texto
    }

    get data(){
        return this._data
    }

    set texto(texto){
        this._texto = texto
    }

    set data(data){
        this._data = data
    }
    
}

