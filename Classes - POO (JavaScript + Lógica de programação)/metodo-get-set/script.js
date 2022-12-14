

class resourceProcesserStation{
    constructor(name, monthlyProcessedLoad){
        this.name = name 
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceprocess =  new resourceProcesserStation("Gaia", 500)

console.log(resourceprocess.weeklyProcessedLoad)

resourceprocess.monthlyProcessedLoad = 600

console.log(resourceprocess.weeklyProcessedLoad)