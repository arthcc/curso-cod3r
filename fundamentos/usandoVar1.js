{
    {
        {
            { 
                var teste = "Teste!"
            }
        }
    }
}
console.log(teste)
// var é visível fora do bloco! 

function teste (){
    local = 123
}
teste()
// console.log(local) // não irá executar fora do bloco dentro da função! 