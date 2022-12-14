

class spaceShip{
    constructor(name, maxCrew, maxRecommendVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendVelocity = maxRecommendVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendVelocity) {
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!! \NDIMINUA OU PODERÁ CAUSAR DANOS A NAVE")
        }
    }
}

class transportSpaceship extends spaceShip{
    speedUp() {
        alert("NAVES DE TRANSPORTE SÓ AUMENTAM A VELOCIDADE EM 1KM/S")
        this.currentVelocity += 1
    }
}

let transportspaceship = new transportSpaceship("Transportadora ", 4, 100)
transportspaceship.speedUp(470)

console.log(transportspaceship)