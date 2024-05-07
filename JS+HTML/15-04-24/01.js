function verificarSituacao(media) {
    if (media >= 7) {
        console.log ("Parabéns, você foi aprovado!");
    } 
    else if (media >= 5) {
        console.log ("Você está de recuperação!");
    } 
    else {
        console.log ("Reprovado!");
    }

}

verificarSituacao(3);
verificarSituacao(6);
verificarSituacao(8);