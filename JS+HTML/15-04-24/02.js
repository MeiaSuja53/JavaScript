function estacao(mes) {
    if (mes<3||mes ===12) {
        console.log ("Verão");
    } 
    else if (mes<6) {
        console.log ("Outono");
    }  
    else if (mes<9) {
        console.log ("Inverno");
    }
    if (mes<9) {
        console.log ("Primavera");
    }

}

estacao(3);
estacao(6);
estacao(8);
estacao(12);
estacao(10);
estacao(11);