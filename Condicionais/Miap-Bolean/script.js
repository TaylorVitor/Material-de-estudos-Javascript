

let departureDayEntry = prompt("Digite a data de partida ( Formato DD/MM/YYYY )")

let departureDay = moment(departureDayEntry, "DD/MM/YYYY")

let today =  moment()

let dateDiff = today - departureDay

let chosenOption = prompt(" Escolha como gostaria de exibir o tempo de partida \n1 - Segundos \n2 - Minutos \n3 - Horas \n4 - Dias \n5 - Anos")

if(chosenOption === "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de voô: " + secondsOfDeparture + " Segundos ")
}   else if(chosenOption === "2"){
    let minuteOfDeparture = Math.round(dateDiff / 1000 / 60 )
    alert("tempo de voô: " + minuteOfDeparture + " Minutos ")
}   else if(chosenOption === "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600 )
    alert("tempo de voô: " + hoursOfDeparture + " Horas ")
}   else if(chosenOption === "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 )
    alert("tempo de voô: " + daysOfDeparture + " Dias ")
}   else if( chosenOption === "5"){
    let yearOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 365)
    alert("tempo de voô: " + yearOfDeparture + " Anos ")
}   else{
    alert('Opção invalida')
}