const form = document.querySelector('#form')
const nameInput = document.querySelector('#name')
const emailIpunt = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Verifica se o nome está vázio
    if (nameInput.value === '') {
        alert('Por favor, preencha o seu nome.')
        return // o return serve para encerrar a função
    }

    // Verifica se o e-mail está preenchido e se é válido
    if (emailIpunt.value === '' || !isEmailValid(emailIpunt.value)) {
        alert('Por favor, preencha o seu e-mail.')
        return
    }

    // Verifica se a senha está preenchida
    if (!validaPassword(passwordInput.value, 8)) {
        alert('A senha precisa de no mínimo 8 dígitosl.')
        return
    }

    // Verifica se a situação foi selecionada
    if (jobSelect.value === '') {
        alert('Por favor, selecione a sua situação.')
        return
    }

    // Verifica se a menssagem está preenchida
    if (messageTextarea.value === '') {
        alert('Por favor, escreva uma mensagem.')
        return
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form.
    form.submit()
})

// Função que valida e-mail
function isEmailValid() {
    // cria uma regex para validar email
    const emailRegex = RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true
    }

    return false
}

// Função que válida senha
function validaPassword(password, minDigits) {
    if (password.length >= minDigits) {
        return true // senha válida
    }

    return false // senha inválida
}