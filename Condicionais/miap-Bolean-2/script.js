

let departureDayEntry = prompt("Digite a data que você deseja: Exemplo: (DD/MM/YYYY)")

let departureDay = moment(departureDayEntry, ("DD/MM/YYYY"))

let today = moment()

let dayDiff = today - departureDay

let choseOption = prompt("Escolha uma das opções abaixo: \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias \n5 - Semanas \n6 - Mês \n7 - Ano \n8 - Data com os dados completos")


if(choseOption === "1"){
    let secondsOfDeparture = Math.round(dayDiff / 1000)
    alert(`De hoje até lá já se passou ${secondsOfDeparture} Segundos` )

}   else if(choseOption === "2"){
    let minutesOfDeparture = Math.round(dayDiff / 1000 / 60)
    alert(`De hoje até lá já se passou ${minutesOfDeparture} Minutos` )

}   else if(choseOption === "3"){
    let hoursOfDeparture = math.round(dayDiff / 1000 / 3600 )
    alert(`De hoje até lá já se passou ${hoursOfDeparture} Horas`)

}   else if(choseOption === "4"){
    let daysOfDeparture = Math.round(dayDiff / 1000 / 3600 / 24)
    alert(`De hoje até lá já se passou ${daysOfDeparture} Dias`)

}   else if(choseOption === "5"){
    let weeksOfDeparture = Math.round(dayDiff / 1000 / 3600 / 168)
    alert(`De hoje até lá já se passou ${weeksOfDeparture} Semanas`)

}   else if(choseOption === "6"){
    let monthOfDeparture = Math.round(dayDiff / 1000 / 3600 / 730)
    alert(`De hoje até lá já se passou ${monthOfDeparture} Mêses`)

}   else if(choseOption === "7"){
    let yearsOfDepurture = Math.round(dayDiff / 1000 / 3600 / 8760)
    alert(`De hoje até lá já se passou ${yearsOfDepurture} Anos `)

}   else if (choseOption === "8"){
    let secondsOfDeparture = Math.round(dayDiff / 1000)
    let minutesOfDeparture = Math.round(dayDiff / 1000 / 60)
    let hoursOfDeparture = Math.round(dayDiff / 1000 / 3600 )
    let daysOfDeparture = Math.round(dayDiff / 1000 / 3600 / 24)
    let weeksOfDeparture = Math.round(dayDiff / 1000 / 3600 / 168)
    let monthOfDeparture = Math.round(dayDiff / 1000 / 3600 / 730)
    let yearsOfDepurture = Math.round(dayDiff / 1000 / 3600 / 8760)
    alert("Data completa para vizualizar " + "\n\nSegundos: " + secondsOfDeparture + "\nMinutos: " + minutesOfDeparture + "\nHoras: " + hoursOfDeparture + "\nDias: " + daysOfDeparture + "\nSemanas: " + weeksOfDeparture + "\nMêses: " + monthOfDeparture + "\nAnos: " + yearsOfDepurture)
}