

let spaceShip = prompt("Qual o nome da sua nave:")

let spaceShipVelocity = 0

let choseOption

function showMenu(){
    let option
    while( option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer?\n" +
                        "1 - Acelerar a nave em 5km/s\n" +
                        "2 - Desacelerar a nave em 5km/s\n" +
                        "3 - Imprimir dados de bordo\n" +
                        "4 - Sair de programa")
    } 
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowdown(velocity){
    let newVelocity = velocity - 5
    if(newVelocity < 0){
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceShipBoardData(name, velocity){
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do{
    choseOption = showMenu()

    switch(choseOption){
        case "1":
            spaceShipVelocity = speedUp(spaceShipVelocity)
            break
        case "2":
            spaceShipVelocity = slowdown(spaceShipVelocity)
            break
        case "3":
            printSpaceShipBoardData(spaceShip, spaceShipVelocity)
            break
        default:
            alert("Encerrando programa de bordo")

    }

}while(choseOption != "4")