class Modulo{
    constructor(){
        this._banco = new Banco()
        this._items = []
    }

    adicionarItem(texto){
        let item = new Item(texto)
        this._items.push(item)
        localStorage.setItem('codMaximo', `${item.cod + 1}`)
    }

    removerItem(cod){
        let indice = this._items.findIndex(item => item.cod == cod)
        this._items.splice(indice,1)
    }

    get itens(){
        return this._items
    }
}