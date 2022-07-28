function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
        // soma = soma + arguments
    }
    return soma
}

console.log(soma())
console.log(soma(1,2,4,5,6,7,43,323))
