// This = Self

const pessoa ={
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

/*
The bind() method creates a new function that,
when called, has its this keyword set to the 
provided value, with a given sequence of arguments 
preceding any provided when the new function is called. 
*/