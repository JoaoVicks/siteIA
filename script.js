var nome = " "

setInterval(() => {
    nome = document.getElementById("inome").value
    console.log(nome);
    document.getElementById("nome").value = "Seja Bem Vindo ao Futuro " + nome ;
}, 1);
