

let pilotName = prompt('Qual é seu nome piloto')

let velocity  = 0

let newVelocity = prompt('Qual velocidade você quer acelerar a nave')

let ConfirmVelocity = confirm("Você vai acelerar até a velocidade " + newVelocity + "KM/S")


if (ConfirmVelocity){
    velocity = newVelocity
}


if(velocity <= 0){
    alert('Nave esta parada, considere acelerar')
}   else if(velocity < 40){
    alert('Você esta devagar podemos aumentar mais')
}   else if(velocity < 80){
    alert('Parece uma boa velocidade para se manter')
}   else if(velocity < 100){
    alert('Velocidade alta, considere diminuir')
}   else(
    alert('Velocidade perigosa, considere reduzir')
)

alert("Nome do piloto: " + pilotName + "\nVelocidade: " + velocity + "Km/s")