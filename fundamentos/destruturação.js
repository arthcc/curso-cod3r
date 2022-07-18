// Em Objetos
const pessoa = {
    nome: 'Ana',
    idade: 22,
    endereco: {
        logradouro: 'Rua da Luz',
        numero:20
    }
}

const {nome, idade} = pessoa // Ama, 5
console.log('O nome do cliente é', nome, 'e a idade é', idade)

// Usar em Função
function rand({min =0, max= 100}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor) 
    // The Math.floor() function returns the largest integer less than or equal to a given number.
}

console.log(rand({min: 0, max:100}))

// Array em Função:
function rand({min =0, max=100}){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand[50, 40])
console.log(rand[900])
console.log(rand([, 10]))
console.log(rand([]))