let email = document.querySelector('#email')
let password = document.querySelector('#password')
let signIn = document.querySelector('#btn-signIn')

signIn.addEventListener('click', function(){
    if (email.value==='grogu@starwars.com' && password.value=='123456'){
        alert('Bem-vindo à Academia Jedi')
    }
    else {
        alert('E-mail ou senha inválidos')
    }
})