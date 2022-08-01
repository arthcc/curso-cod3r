const notas = [7.7, 2.3, 2.2, 3.1]

// Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

// Com callback
const notasBaixas2 = notas.filter(function (notas){
    return notas < 7
})

// Arrow Function
const notasBaixas3 = notas.filter(notas => notas < 7)
