
function addNewPhone() {
    const phoneForm = document.querySelector("form#phones")
    const newPhone = phoneForm.children[0].cloneNode(true)
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}


function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) =>{
        message += "Telefones " + (index + 1) + ":" + phone.value + "\n"
    })

    alert(message)
}



/* 
querySelect pega o primeiro elemento da posição 0
queryselectAll seleciona a lista inteira
cloneNode clona(no caso o p) (deep) true clona todos os filhos do p, false clona somente o p
criando um filho para um elemento já existente
*/