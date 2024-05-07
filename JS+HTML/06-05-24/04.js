let primeiroNumero = 1;
let segundoNumero = 1;
console.log(primeiroNumero);
console.log(segundoNumero);
for (let i=3; i<=10;i++){
    let terceiroNumero = primeiroNumero + segundoNumero;
    console.log(terceiroNumero);
    primeiroNumero = segundoNumero;
    segundoNumero = terceiroNumero;
}