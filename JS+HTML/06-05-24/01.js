let escolhausuario="pedra"
let escolhacpu
let resuldado
do{
    let aleatorio=Math.floor(Math.random()*3);
    switch (aleatorio
    ) {
        case 0:
            escolhacpu = "pedra";
            break;
        case 1:
            escolhacpu = "papel";
            break;
        default:
            escolhacpu = "tesoura";
            break;
    }
    if ((escolhausuario==="pedra" && escolhacpu==="tesoura")
    ||(escolhausuario==="papel" && escolhacpu==="pedra")
    ||(escolhausuario==="tesoura" && escolhacpu==="papel")){
        resuldado="Você ganhou"
    }
    else if (escolhausuario===escolhacpu){
        resuldado="Empate"
    }
    else{
        resuldado="Você perdeu"
    } 
    console.log("Você escolheu "+escolhausuario+" e o computador escolheu "+escolhacpu+". "+resuldado)
    escolhausuario=prompt("Digite pedra, papel ou tesoura")
    }while(escolhausuario!=="sair")