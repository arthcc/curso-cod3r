console.log(Math.ceil(6.1)) // 7

const produto = {}
produto1.nome = 'Bola' 
// Ou
produto1['nome'] = 'Bola' 
console.log(produto1.nome) // Bola!

function Obj (nome) {
    this.nome = nome // Para acessar fora do scope
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')