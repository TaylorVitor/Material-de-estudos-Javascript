

class typeCars {
    constructor(brand, name, quantity){
        this.brand = brand
        this.name = name
        this.quantity = quantity
    }
}

let bmw = new typeCars("BMW", "M4", 23)

let fiat = new typeCars("Fiat", "Cronos", 32)

let landRover = new typeCars("Land Rover", "Discovery", 21)

console.log(bmw,fiat,landRover)