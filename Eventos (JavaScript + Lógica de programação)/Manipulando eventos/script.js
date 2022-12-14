

testingArrow = {
    name: "Escola de JavaScript",
    narmalFunction: function () {
        console.log(this)
    },
    arrowFunction: () => {
        console.log(this)
    }
}

testingArrow.arrowFunction()