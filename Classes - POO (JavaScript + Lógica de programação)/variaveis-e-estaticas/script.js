


class spaceship{
    static get decelerationRate() {
        return 0.15
    }
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += (acceleration * (1 - spaceship.decelerationRate))
    }
}

let space = new spaceship("Apollo")

space.speedUp(100)

console.log(space)
