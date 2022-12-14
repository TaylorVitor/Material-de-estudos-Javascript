

class spaceWeapons {
    constructor(identifie) {
        this.identifie = identifie
        this.shotsWeapons = 5
    }

    shot() {
        if(this.shotsWeapons > 0) {
            console.log("Arma " + this.identifie + "Tiros")
            this.shotsWeapons -= 1
        } else {
            throw new Error("No more bullets available")
        }
    }

    reload() {
        this.shotsWeapons = 5
    }
}



let Fenixweapons = new spaceWeapons("Fenix")

try {
    Fenixweapons.shot()
    Fenixweapons.shot()
    Fenixweapons.shot()
    Fenixweapons.shot()
    Fenixweapons.shot()
    Fenixweapons.shot()

} catch(e) {
    console.log(e.message)
    Fenixweapons.reload()
} finally {
    console.log("you shot too much!!")
}

console.log(Fenixweapons)