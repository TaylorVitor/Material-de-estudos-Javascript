

class spaceShip {
    constructor(name, maxCrew, maxRecommendVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendVelocity
        this.currentVelocity = 0
    }

    
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendVelocity){
            alert("Velocidade muito alta!!\nDiminua a velocidade senão a nave pode ser danificada.")
        }
    }
}

class battleSpaceShip extends spaceShip {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class discoverySpaceShip extends spaceShip {
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamentos de amostras e parando nave de descoberta")
    }
}

let darwin = new discoverySpaceShip("Darwin", 21, 200)
let fenix = new battleSpaceShip("Fenix", 23, 250)

darwin.speedUp(210)
fenix.speedUp(200)

darwin.stop()
fenix.stop()