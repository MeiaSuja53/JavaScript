
function classificarNota(nota) {
    switch (true) {
        case (nota >= 90):
            return "A";
        case (nota >= 80):
            return "B";
        case (nota >= 70):
            return "C";
        case (nota >= 60):
            return "D";
        default:
            return "F";
    }
}

var nota = 70;
console.log("Classificação da nota:", classificarNota(nota));