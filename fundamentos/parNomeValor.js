// par nome / valor
const saudacao = 'Opa' // Contexto Léxico 1

function teste() {
    const saudacao = 'Boa Tarde!'// Contexto Léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    endereco: {
        longadouro: 'Rua Manoel Franco',
        numero: 22,
        bairro: 'Centro',  
    },    
    matricula:{
        emNumero: 21432321,
        identificadorDeCliente: 'Cliente Prime',
        beneficios: null
    }  
}

console.log(saudacao)
console.log(teste())
console.log(cliente)