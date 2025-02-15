/*  const idade = 18;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade === 18) {
    console.log("Acabou de atingir a maioridade");
} else {
    console.log("Maior de idade");
}; 

 */


/* let numero1 = prompt("digite um numero");

if (numero1 > 0) {
    console.log("positivo");
} else if (numero1 == 0) {
    console.log("igual a zero");
} else {
    console.log("negativo")
};
  */




/* 
let num = prompt("Digite um número para verificar se ele é impar ou par ")

if (num % 2 === 0) {
    console.log("numero par")
} else {
    console.log('numero impar')
}; 
 */


/* let idade1 = prompt("Digite sua idade");

if (idade1 >= 18) {
    console.log("Adulto");
} else if (idade1 <= 12) {
    console.log("Crianca");
} else {
    console.log("adolecente")
};
 */



/* if (idade1 >= 18) {
    console.log("Adulto");
} else if (idade1 <= 12) {
    console.log("Crianca");
} else if (idade1 > 12 && idade1 < 18) {
    console.log("adolecente");
}
else {
    console.log("Voce informou letras por favor informe numeros ")

};
 */

/* //if (idade1 >= 18) {
    console.log("Adulto");
} else if (idade1 <= 12) {
    console.log("Crianca");
} else if (idade1 > 12 && idade1 < 18) {
    console.log("adolecente");
}
else {
    console.log("Voce informou letras por favor informe numeros ")

}; */


/* let nota = prompt("Digite sua nota");

if (nota <= 60) {
    console.log("REPROVADO");
}else if (nota >= 60){
    console.log("APROVADO");

}
 */


let num1 = parseFloat(prompt("Insira o primeiro número:"));
let num2 = parseFloat(prompt("Insira outro número:")); /* parseFloat para converter em numero real o parse inter= */
let operacao = prompt("Insira a operação. Ex: +, -, *, /.");

let resultado = null;

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 == 0) {
            console.log("Você não pode dividir um número por zero.");
        } else {
            resultado = num1 / num2;
            console.log("resultado", resultado);
        }
        break;
    default:
        console.log("Operador inválido.");
        break;
}

if (operacao != "/") {

    console.log("resultado", resultado);

};






