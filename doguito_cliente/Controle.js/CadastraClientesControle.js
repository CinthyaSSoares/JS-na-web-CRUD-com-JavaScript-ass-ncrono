import { clienteService } from "../service/ClienteService.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault() //previnir de enviar o form sem terminar
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(() => {
        window.location.href = "../telas/cadastro_concluido.html"
    })
})