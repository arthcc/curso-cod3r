const fabricantes = ['Mercerdes', 'Audi', 'BMW']

function print(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
} 

fabricantes.forEach(print)

