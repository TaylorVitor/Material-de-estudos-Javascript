
/*

let spaceShip = prompt("Qual o nome da espaçonave?")

let charReplace = prompt("Qual caracter você deseja substituir?")

let replaceChar = prompt("Por qual caracter você deseja substituir")

let newSpaceShip = ""

for(let pos = 0; pos < spaceShip.length; pos++) {
    if(spaceShip[pos] === charReplace){
        newSpaceShip += replaceChar
    }else {
        newSpaceShip += spaceShip[pos]
    }
}

alert("O novo nome da nave é: " + newSpaceShip)

*/ 


let spaceShip = prompt("Qual o nome da sua nave?")

let charReplace = prompt("Qual caracter você deseja subtituir?")

let replacementChar = prompt("Por qual caracter você deseja subtituir?")

let newSpaceShip = ""


for(let pos = 0; pos < spaceShip.length; pos++) {
    if(spaceShip[pos] === charReplace){
        newSpaceShip += replacementChar

    }else{
        newSpaceShip += spaceShip[pos]
    }
}

alert("O novo nome da nave é: " + newSpaceShip)
