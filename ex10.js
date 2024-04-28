// 10. Crie uma função que receba um número como parâmetro e retorne o 
// fatorial desse número.


function ehFatorial(numero) {
    let resultado = 1
    for (let i = 2; i <= numero; i++) {
        resultado *= i
    }
    return resultado
}

console.log(ehFatorial(4))