function area (largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do Permitido: ${area}m2.`)        
    } else{
        return area
    }
}

console.log(area(10, 30))
console.log(area(2,2))

