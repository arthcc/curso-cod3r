// Armazenando função na variável
const imprimirSoma = function(a, b) {
    console.log(a+b)
}
imprimirSoma(2,3) // 5

// Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}
console.log(soma(1,1)) // output 2

//retorno impilicito
const substracao = (a, b) => a-b
console.log(substracao(5,3)) // output 2
