class Controller{
    constructor(){
        localStorage.setItem('codMaximo', '1')
        this._modulo = new Modulo()
        this._view = new View()
    }
    adicionar(){
        let texto = document.querySelector('#textoAnotacao').value

        if(texto){
            this._modulo.adicionarItem(texto)
            this._view.atualizarTela(this._modulo.itens)
        } else {
            this._view.mensagemErro()
        }
    }

    remover(cod){
        this._modulo.removerItem(cod)
        this._view.atualizarTela(this._modulo.itens)
    }
}