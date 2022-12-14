

let spaceShip = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceShip() {
    spaceShip.name = prompt("Informe o nome da nave ")
    spaceShip.type = prompt("Informe o tipo da nave ")
    spaceShip.maxVelocity = Number(prompt("Informe a velocidade maxima da nave (Km/s)"))
}

function accelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? "))
    spaceShip.speedUp(acceleration)
    if(spaceShip.velocity > spaceShip.maxVelocity) {
        alert("Velocidade maxima ultrapassada! \nVelocidade da nave: " + spaceShip.velocity + "Km/s\n " +
        "Velocidade maxima da nave: " + spaceShip.maxVelocity + "km/s ")
    }
}

function stop() {
    alert("Nome: " + spaceShip.name + "\nTipo: " + spaceShip.type + "\nVelocidade da nave: " 
    + spaceShip.velocity + "\nMaxima da nave: " + spaceShip.maxVelocity)
    spaceShip.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja: \n1 - Acelerar\n2- Parar" )
        switch(chosenOption) {
            case "1":
                accelerate()
                break
            case "2":
                stop()
                break
                default:
                    alert("Opção invalida")
        }
    }while(chosenOption != "2")

}

registerSpaceShip()
showMenu()