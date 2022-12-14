

let spaceShip = {
    name: "Stuffer",
    type: "Extração",
    maxCrew: "20",
    turOn: function () {
        alert("Preparando propursão")
        alert("Ligando computador de bordo")
    }
}

spaceShip.velocity = 0
spaceShip.speedUp = function(spaceShipSpeedUp, acceleration) {
    spaceShipSpeedUp.velocity += acceleration
}

console.log(spaceShip)

spaceShip.speedUp(spaceShip,10)

console.log(spaceShip)