function tratarErro(erro){
    throw new Error('Erro')
}

function imprimeNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + "!")
    } catch(e) {
        tratarErro(e)
    }
}

const obj = { name: "Pedro" }
imprimeNome(obj)
