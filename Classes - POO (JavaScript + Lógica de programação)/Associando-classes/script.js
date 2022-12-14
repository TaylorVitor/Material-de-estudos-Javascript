

class captain{
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class spaceShip {
    constructor(name, crewQuantity, captainName, captainAge, captainFlight){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new captain(captainName, captainAge, captainFlight)
    }
}

let spaceship = new spaceShip("Skyline", 30, "Willian weber", 42, 60000)

console.log(spaceship)