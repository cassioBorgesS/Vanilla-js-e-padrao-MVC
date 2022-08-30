class View {
    constructor(){
        this._texto = document.querySelector('#textoAnotacao')
        this._tabela = document.querySelector('.linhas-tabela')
    }

    atualizarTela(itens){
        this._tabela.innerHTML = ''

        itens.forEach(item => {
            let linha = this._criarLinha(item)
            this._tabela.appendChild(linha)
        });

        this._texto.value=''
    }

    mensagemErro(){
        alert('Escreva algo!!!')
    }

    _criarLinha(item){
        let linha = document.createElement('tr')
        this._criarCelula(item.cod, linha)
        this._criarCelula(item.texto, linha)
        this._criarCelula(this._dataPadronizada(item.data), linha)
        this._criarCelula(`<div onclick="ctrl.remover(${item.cod})">x</div>`, linha)

        return linha
    }

    _criarCelula(item, linha){
        let celula = document.createElement('td')
        celula.innerHTML = item
        linha.appendChild(celula)
    }

    _dataPadronizada(data){
        let mes = `${data.getMonth() + 1}`

        if (data.getMonth() < 9) mes = '0' + mes
        return `${data.getDate()}/${mes}/${data.getFullYear()}`
    }

}