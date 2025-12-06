function fazerlogin(){
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    let loginCadastro = localStorage.getItem('login')
    let senhaCadastro = localStorage.getItem('senha')

    if(login === loginCadastro && senha === senhaCadastro){
        window.location.href = "home.html";
    }else{
        alert('Login ou senha incorretos!')
    }
}

function fazercadastro(){
    let nome = document.getElementById('nome').value
    let dataNasc = document.getElementById('dataNasc').value
    let email = document.getElementById('email').value
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value  

    localStorage.setItem('nome', nome)
    localStorage.setItem('dataNasc', dataNasc)
    localStorage.setItem('email', email)
    localStorage.setItem('login', login)
    localStorage.setItem('senha', senha)

    alert("Cadastro realizado! Agora faça login.");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function(){
    let nome = localStorage.getItem('nome');
    if(document.getElementById('perfil')){
        document.getElementById('perfil').innerHTML = "Olá, " + nome + "!";
    }
});
