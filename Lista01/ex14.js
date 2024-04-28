// 14. Escreva uma função que receba dois números como parâmetros e
// retorne verdadeiro se a soma deles for divisível por 5 e falso caso
// contrário.

function verifica(num1, num2) {
    soma = num1 + num2
    if (soma % 5 === 0) {
        return true
    } else {
        return false
    }

}

console.log(verifica(3, 7));
console.log(verifica(3, 0));