

class spaceShip {
    constructor(name, maxQuantity, maxRecommendValue){
        this.name = name
        this.maxQuantity = maxQuantity
        this.maxRecommendValue = maxQuantity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendValue){
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!' \nDiminua a velocidade ou podera causar danos na nave.")
        }
    }
}

class transportSpaceship extends spaceShip{
    constructor(name, maxQuantity, maxRecommendValue, maxLoadWeight){
        super(name, maxQuantity, maxRecommendValue)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert("incrementando velocidade " + acceleration + "km/s ")
        super.speedUp(acceleration)
    }
}

let transportspaceship = new transportSpaceship("Transportadora ", 4, 100, 400)

console.log(transportspaceship)

transportspaceship.speedUp(210)