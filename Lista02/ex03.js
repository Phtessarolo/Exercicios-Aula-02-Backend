// 3. Escreva uma função chamada mapearArray que aceita uma função e um array como parâmetros.
// A função mapearArray deve aplicar a função recebida a cada elemento do array e retornar um
// novo array com os elementos resultantes.


function mapearArray(funcao, array) {
    let passarFuncao = []

    for (let i = 0; i < arr.length; i++) {
        passarFuncao.push(funcao([array[i]]))
    }
}