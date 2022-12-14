

let wrapCount = 0
let chosenOption = ""

let spaceShip = prompt("Digite o nome da sua nave")

chosenOption = prompt("Você deseja entar em drobra espacial? \n1 sim \n2 não")

while(chosenOption === "1"){
    chosenOption = prompt("Você deseja entar na proxima drobra espacial? \n1 sim \n2 não")
    wrapCount += 1
}

alert(`Nome da nave: ${spaceShip} \nQuantidade de dobras: ${wrapCount}`)


