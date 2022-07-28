const soma = function (x, y) {
    return x + y
}
const print = function (a,b, operacao = soma) {
    console.log(operacao(a, b))
}

print(3,4)
//__________________________________________

print(100, 50, function (x,y){
    return x - y
})

print(3, 4, (x,y) => x * y) // Com Arrow Function 

//___________________________________________

const pessoa ={
    falar: function (){
        console.log('Teste')
    }
}
pessoa.falar()