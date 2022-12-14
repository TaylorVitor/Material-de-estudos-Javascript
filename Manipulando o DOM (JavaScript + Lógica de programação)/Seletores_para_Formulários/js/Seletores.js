

function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like']:checked").value
    let developOption = document.querySelectorAll("input[name='developer-options']:checked")
    let optionValue = []
    developOption.forEach(element => {optionValue.push(element.value) })
    let optionsChecked = optionValue.join(",")
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar: " + likeProgramming +
    "\nConhecimento em quais linguagens: " + optionsChecked)    
}



// O método join une todos os elementos de uma matriz em uma string e retorna esta string.
//para o select e option aparecer no alert, dever ter option:checked e).text