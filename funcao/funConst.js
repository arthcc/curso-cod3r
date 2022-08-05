// Função Construtota

function Carro( VelMax = 200, delta =5){
    // atributo privado
    let VelAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (VelAtual + delta <= VelMax){
            VelAtual += delta
        }else{
            VelAtual = VelMax
        }
    }

    // metodo publico
    this.getVelAtual = function () {
        return VelAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
