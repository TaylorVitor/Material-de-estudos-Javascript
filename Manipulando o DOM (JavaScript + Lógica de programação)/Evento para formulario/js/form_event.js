

function save() {
    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value

    alert ("Seu nome é: " + name + "\nVocê programa em: " + programmingLang)
}