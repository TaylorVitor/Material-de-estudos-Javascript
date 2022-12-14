

let pilotName = prompt('Qual é seu nome?')

let velocity = 0

let newVelocity = prompt('Qual velocidade deseja chegar?')

let confirmVelocity = confirm("Você deseja acelerar até " + newVelocity + "Km/s")

if(confirmVelocity){
    velocity = newVelocity
}


if(velocity <= 0){
    alert('O carro esta parado, acelere para sair do lugar')
}   else if(velocity <= 40){
    alert('Devagar pode acelerar mais')
}   else if(velocity <= 80 ){
    alert('Velocidade adequada, mantenha-se')
}   else if(velocity <= 100){
    alert('Velocidade alta diminua')
}   else (
    alert('Velociade perigosa reduza imediatamente')
)