const form = document.querySelector('.dados');
const inputs = form.querySelectorAll('input, textarea');
const nomeInput = document.getElementById("nome-input");
const emailInput = document.getElementById("email-input");
const celInput = document.getElementById("cel-input");
// const assuntoInput = document.getElementById("selecao-assunto");
const msgInput = document.getElementById("last_input");

const ajudaNome = document.getElementById("ajuda-nome");
const ajudaEmail = document.getElementById("ajuda-email");
const ajudaCel = document.getElementById("ajuda-cel");
// const ajudaAssunto = document.getElementById("ajuda-assunto");
const ajudaMsg = document.getElementById("ajuda-msg");

console.log(inputs);

// ---------- VALIDAÇÃO NOME COMPLETO ---------- //

nomeInput.addEventListener("change", (e) => {


    if (e.target.value.length < 5) {
        nomeInput.classList.add("errado");
        nomeInput.classList.remove("certo");
        ajudaNome.textContent = "O nome precisa ter pelo menos 5 letras"
        ajudaNome.classList.add("active");
    }
    else {
        nomeInput.classList.add("certo");
        nomeInput.classList.remove("errado");
        ajudaNome.classList.remove("active");
    }

    if (nomeInput.value === "") {
        nomeInput.classList.remove("certo");
        nomeInput.classList.remove("errado");
        ajudaNome.classList.remove("active");
    }

})


// ---------- VALIDAÇÃO E-MAIL ---------- //

emailInput.addEventListener("change", (e) => {

    let regexEmail = /\S+@\S+\.\S+/;

    if (!regexEmail.test(emailInput.value)) {
        emailInput.classList.add("errado");
        emailInput.classList.remove("certo");
        ajudaEmail.textContent = "O email informado não é Válido!!!"
        ajudaEmail.classList.add("active");
    }
    else {
        emailInput.classList.add("certo");
        emailInput.classList.remove("errado");
        ajudaEmail.classList.remove("active");
    }

    if (emailInput.value === "") {
        emailInput.classList.remove("certo");
        emailInput.classList.remove("errado");
        ajudaEmail.classList.remove("active");
    }
})

// ---------- VALIDAÇÃO CELULAR ---------- //


celInput.addEventListener("change", (e) => {

    //Remover os caracters não numéricos usando a expressão regular /\D/g e limitar a 11 dígitos.
    let limparValor = celInput.value.replace(/\D/g, "").substring(0, 11);

    //Dividir a string em um array de caracteres individuais
    let numerosArray = limparValor.split("");

    //Criar a variável para receber o número formatado
    let numeroFormatado = "";

    //Acessa o IF quando a qtd for maior que 0
    if (numerosArray.length > 0) {
        //Formata o DDD e concatenar o valor
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    //Acessa o IF quando a qtd for maior que 2
    if (numerosArray.length > 2) {
        //Formata o numeros antes do hífen e concatenar o valor
        numeroFormatado += `${numerosArray.slice(2, 7).join("")}`;
    }

    //Acessa o IF quando a qtd for maior que 7
    if (numerosArray.length > 7) {
        //Formata o numeros antes do hífen e concatenar o valor
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }

    //Insere o valor formatado no input
    celInput.value = numeroFormatado;

    if (celInput.value.length == 14) {
        celInput.classList.add("certo");
        celInput.classList.remove("errado");
        ajudaCel.classList.remove("active");
    }
    else {
        celInput.classList.add("errado");
        celInput.classList.remove("certo");
        ajudaCel.textContent = "O (DDD) + número do celular, devem conter 14 dígitios"
        ajudaCel.classList.add("active");
    }


    if (celInput.value === "") {
        celInput.classList.remove("certo");
        celInput.classList.remove("errado");
        ajudaCel.classList.remove("active");
    }
})



// ---------- VALIDAÇÃO MENSAGEM ---------- //

msgInput.addEventListener("change", (e) => {

    msgInput.classList.add("errado");

    if (e.target.value.length < 5) {

        msgInput.classList.add("errado");
        msgInput.classList.remove("certo");


        ajudaMsg.textContent = "A mensagem precisa ter pelo menos 5 letras";
        ajudaMsg.classList.add("active");

    }
    else {
        msgInput.classList.add("certo");
        msgInput.classList.remove("errado");
        ajudaMsg.classList.remove("active");

    }

    if (e.target.value.length == 0) {
        msgInput.classList.remove("certo");
        msgInput.classList.remove("errado");
        ajudaMsg.classList.remove("active");

    }


})

// ---------- LIMPAR CAMPOS FORMULÁRIO ---------- //

document.getElementById("btn-limpar").addEventListener("click", () => {


    inputs.forEach(function (input) {
        input.classList.remove('certo', 'errado');
    });

    // Optionally, hide the help texts
    let helpTexts = form.querySelectorAll('.ajuda-texto');
    helpTexts.forEach(function (helpText) {
        helpText.classList.remove('active');
    });
});



// ---------- VALIDAÇÃO ENVIO FORMULÁRIO ---------- //


document.getElementById("btn-enviar").addEventListener("click", () => {

    let validacao = true;
    let count = 0;

    //Valida o form se pelo menos o cel ou o e-mail estiverem preenchidos
    inputs.forEach((input) => {
        if (!input.classList.contains("certo")) {
            if (input.id === "email-input") {
                count += 1;
            }
            else if (input.id === "cel-input") {
                count += 1;
            }
            else {
                validacao = false;
            }

            if (count === 2) {
                validacao = false;
            }

        }

    })

    if (validacao) {
        alert("Funcionou");
        // form.submit();
    } else {
        alert("Todos os campos precisam estar preenchidos de forma correta");
    }

})