import {clienteService} from '../service/ClienteService.js'

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr'); //criando linha para novo cliente

    const conteudo = `
        <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td> `
    linhaNovoCliente.innerHTML = conteudo;
    linhaNovoCliente.dataset.id = id;

    return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela')


// Chamando a função para excluir cliente
tabela.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir'
    if(botaoDeletar) {
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)

        .then(() =>{
            linhaCliente.remove()
        })
    }
})

// Chamando a função de criar novo cliente
clienteService.listaClientes()
.then(data => {
    data.forEach(elemento => {
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    })
})