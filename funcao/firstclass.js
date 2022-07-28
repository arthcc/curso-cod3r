function fun1() {
    // undefined   
}
//

const obj = {}
obj.falar = function () { return "Teste"}
console.log(obj.falar())

//

function run(fun) {
    fun()
}
run(function () {console,log('Running...')})

// Uma Função pode retornar/conter uma função
function soma(a,b) {
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)


