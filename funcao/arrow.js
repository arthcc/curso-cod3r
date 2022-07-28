let dobro = function (a) {
    return 2 * a
}

// Agora em Função Arrow
dobro = (a) => {
    return 2 * a
}
        // Ou            
dobro = a => 2 * a
console.log(dobro(10)) // 20

// Mais Exemplos:
ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())

hello = () => {
    return "Hello World!";
  } 

hello = () => "Hello World!";  