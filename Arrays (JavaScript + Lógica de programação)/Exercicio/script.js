

const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewCharThan9 = hitchedSpaceships.filter(spaceShip => {
    return spaceShip[1] > 9
}).map(spaceShip => {
    return spaceShip[0]
})

let gatePlataform = hitchedSpaceships.findIndex(spaceShip => {
    return spaceShip[2] == false
})

let hightSpaceShip = hitchedSpaceships.map(spaceShip => {
    return spaceShip[0].toUpperCase()
})

let messagem = "Espaço nave com de 9 tripulantes: " + crewCharThan9.join(",")
messagem += "\nPlataforma com processo de engate: " + (gatePlataform + 1)
messagem += "\nEspaçonaves destacadas: " + hightSpaceShip.join(",")

alert(messagem)