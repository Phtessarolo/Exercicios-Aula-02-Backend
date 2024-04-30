// 1. Escreva uma função chamada encontrarMaiorElemento que aceita um
// array de números como parâmetro e retorna o maior elemento do array.

function encontrarMaiorElemento(array) {
    let maior = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior;

}

console.log(encontrarMaiorElemento([5, 10, 3, 8]));
console.log(encontrarMaiorElemento([5, 10, 3, 8]));
console.log(encontrarMaiorElemento([124, 23, 0, 8, 222, 23123, 123123]));