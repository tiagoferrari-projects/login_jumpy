// variáveis 
let inputElements = document.querySelectorAll('input')
let spanField = document.querySelectorAll('.span-required')
let submit = document.getElementById('confirm-submission')

// variáveis para preencher os Spans conforme condições das funções
let inputCheck = `'Campo Obrigatório'`
let checkRegistration = `'Campos Obrigatórios não registrados'`
let success = `'Sucesso!'`


let tester = true

//função que checa se todos os campos NÃO estão vazios 
function checkFields() {
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value.trim().length == 0) {
            spanField[i].innerHTML = `<span class="span-required">${"'Campo Obrigatório'"}</span>`
            document.querySelectorAll('input')[i].style.marginBottom = 0
            tester = false
        }
    }
    successSend(tester)
}

// função para confirmar sucesso no cadastro
function successSend(tester) {
    if (tester) {
        submit.style.color = '#0F7B0F'
        submit.innerHTML = `<span class="success">${success}</span>`
    }
    else {
        submit.style.color = '#E73550'
        submit.innerHTML = `<span class="checkRegistration">${checkRegistration}</span>`
    }
}


