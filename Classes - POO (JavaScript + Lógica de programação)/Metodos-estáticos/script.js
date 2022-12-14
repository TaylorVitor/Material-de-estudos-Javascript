

class resourceProcessStation {
    constructor(name, mothLyProcessing){
        this.name = name
        this.mothLyProcessing = mothLyProcessing
    }
    static calculateProcessHours(mothLyProcessing, hours) {
        return mothLyProcessing / 720 * hours 
    }
}

let processor = new resourceProcessStation("Galeão", 2000)

let totolProcessed = resourceProcessStation.calculateProcessHours(processor.mothLyProcessing, 10)

console.log(totolProcessed)