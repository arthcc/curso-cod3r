//função sem retorno com dois parametros
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
//output = 5

//Função com Retorno
function soma(a, b=0) {
    return a+b
}
console.log(soma(2,3)) // função mais os parametros [2 e 3]
// output ainda segue sendo 5