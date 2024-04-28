// 13. Faça um programa que verifique se um número é negativo, 
// positivo ou zero.

function verifique(numero) {
    if (numero > 0) {
        return 'Positivo'
    } else if (numero < 0) {
        return 'Negativo'
    } else {
        return 'Zero'
    }
}


console.log(verifique(20));
console.log(verifique(-5));
console.log(verifique(0));