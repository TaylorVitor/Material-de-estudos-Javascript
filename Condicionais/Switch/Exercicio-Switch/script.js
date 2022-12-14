

let distance = prompt("Digite a distância desejada")

let choseOption = prompt("Para qual unidade deseja converter? \n1. Parse (Pc) \n2 Unidade Astronomica (AU) \n3 Quilometros (km)")

let choseValue 
let converterValue

switch(choseOption){
    case "1":
        choseValue = "Parse"
        converterValue = distance * 0.306601
        break

    case "2":
        choseValue = "Unidade Astronomica"
        converterValue = distance * 63241.1
        break

    case "3":
        choseValue = "Quilometros"
        converterValue = distance * 9.5 * Math.pow(10, 12)
        break

    default:
        choseValue = "Valor não encotrado"
        converterValue = "Escopo sem valor"
        break
}

alert ("Distancia em anos-luz:  " + distance + "\n" + choseValue  + "\n" + converterValue )