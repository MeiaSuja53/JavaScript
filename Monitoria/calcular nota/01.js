function mostra(frase) {
        console.log(frase)
    }

    function pula() {
        console.log("<br>")
    }

    var media = prompt("Qual e a sua media?");
    if (media >= 7) {
        mostra("Parabéns, você foi aprovado!");
    }

    if (media >= 5) {
        mostra("você està de recuperação")
    }
    
    else {
        mostra("Reprovado!")
    }
    