

class spaceShip {
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity += acceleration
    }

}

let artemis = new spaceShip("Artemis")

artemis.speedUp(20)
artemis.speedUp(12)

console.log(artemis)