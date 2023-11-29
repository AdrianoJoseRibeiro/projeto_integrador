const wrapper_form = document.querySelector('.wrapper-form-login');
const wrapper_son = document.querySelector('.wrapper-son');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.cadastro-link');
const btn_login_menu = document.querySelector('.btn-login');
const btn_cadastro_menu = document.querySelector('.btn-cadastro');
const icone_fechar = document.querySelector('.icone-fechar');
const circle_login = document.querySelector('.circle');
const content = document.querySelector('.content');
const btn_login_main = document.querySelector('.btn-login-main');
const btn_cadastro_main = document.querySelector('.btn-cadastro-main');



registerLink.addEventListener('click', () => {
    wrapper_son.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper_son.classList.remove('active');
});

btn_login_menu.addEventListener('click', () => {

    if (wrapper_son.classList.contains('active')) {
        wrapper_son.classList.remove('active');
    }
    else {
        wrapper_form.classList.toggle('active');
        wrapper_son.classList.toggle('active-popup');
        wrapper_son.classList.remove('active');
    }

    if ((!wrapper_form.classList.contains('active')) && (wrapper_son.classList.contains('active')) && (!wrapper_son.classList.contains('active-popup'))) {
        wrapper_son.classList.remove('active');
        wrapper_form.classList.toggle('active');
        wrapper_son.classList.toggle('active-popup');
        console.log("entrou no if");
    }


    try {
        if (!circle_login.classList.contains('login')) {
            circle_login.classList.add('login');
            circle_login.classList.remove('cadastro');
            content.classList.add('login');
            content.classList.remove('cadastro');
        } else {
            circle_login.classList.remove('login');
            content.classList.remove('login');
            wrapper_form.classList.remove('active');
            wrapper_son.classList.remove('active-popup');
        }// pode lançar três tipos de exceções
    } catch (erro) {
        if (erro instanceof TypeError) {  // declarações para manipular exceções TypeError
            //console.log("entrou no TypeErro");
        } else {
            //console.log("Outro tipo de erro");
        }
    }

});

btn_cadastro_menu.addEventListener('click', () => {


    if ((wrapper_form.classList.contains('active')) && (!wrapper_son.classList.contains('active'))) {
        wrapper_son.classList.add('active');
    }
    else {
        wrapper_form.classList.toggle('active');
        wrapper_son.classList.toggle('active-popup');
        wrapper_son.classList.add('active');
    }

    try {

        if (!circle_login.classList.contains('cadastro')) {
            circle_login.classList.add('cadastro');
            circle_login.classList.remove('login');
            content.classList.add('cadastro');
            content.classList.remove('login');
        } else {
            circle_login.classList.remove('cadastro');
            content.classList.remove('cadastro');
            wrapper_form.classList.remove('active');
            wrapper_son.classList.remove('active-popup');
            wrapper_son.classList.remove('active');
        }
    } catch (erro) {
        if (erro instanceof TypeError) {
            // console.log("entrou no TypeErro");
        } else {
            // console.log("Outro tipo de erro");
        }
    }

});

icone_fechar.addEventListener('click', () => {
    wrapper_form.classList.remove('active');
    wrapper_son.classList.remove('active-popup');
    wrapper_son.classList.remove('active');
    circle_login.classList.remove('login');
    circle_login.classList.remove('cadastro');
    content.classList.remove('login');
    content.classList.remove('cadastro');
});


btn_login_main.addEventListener('click', () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (wrapper_son.classList.contains('active')) {
        wrapper_son.classList.remove('active');
    }
    else {
        wrapper_form.classList.toggle('active');
        wrapper_son.classList.toggle('active-popup');
        wrapper_son.classList.remove('active');
    }

    if ((!wrapper_form.classList.contains('active')) && (wrapper_son.classList.contains('active')) && (!wrapper_son.classList.contains('active-popup'))) {
        wrapper_son.classList.remove('active');
        wrapper_form.classList.toggle('active');
        wrapper_son.classList.toggle('active-popup');
        console.log("entrou no if");
    }


    try {
        if (!circle_login.classList.contains('login')) {
            circle_login.classList.add('login');
            circle_login.classList.remove('cadastro');
            content.classList.add('login');
            content.classList.remove('cadastro');
        } else {
            circle_login.classList.remove('login');
            content.classList.remove('login');
            wrapper_form.classList.remove('active');
            wrapper_son.classList.remove('active-popup');
        }// pode lançar três tipos de exceções
    } catch (erro) {
        if (erro instanceof TypeError) {  // declarações para manipular exceções TypeError
            //console.log("entrou no TypeErro");
        } else {
            //console.log("Outro tipo de erro");
        }
    }

});

btn_cadastro_main.addEventListener('click', () => {

    window.scrollTo({ top: 0, behavior: 'smooth' })
    if ((wrapper_form.classList.contains('active')) && (!wrapper_son.classList.contains('active'))) {
        wrapper_son.classList.add('active');
    }
    else {
        wrapper_form.classList.toggle('active');
        wrapper_son.classList.toggle('active-popup');
        wrapper_son.classList.add('active');
    }

    try {

        if (!circle_login.classList.contains('cadastro')) {
            circle_login.classList.add('cadastro');
            circle_login.classList.remove('login');
            content.classList.add('cadastro');
            content.classList.remove('login');
        } else {
            circle_login.classList.remove('cadastro');
            content.classList.remove('cadastro');
            wrapper_form.classList.remove('active');
            wrapper_son.classList.remove('active-popup');
            wrapper_son.classList.remove('active');
        }
    } catch (erro) {
        if (erro instanceof TypeError) {
            // console.log("entrou no TypeErro");
        } else {
            // console.log("Outro tipo de erro");
        }
    }

});