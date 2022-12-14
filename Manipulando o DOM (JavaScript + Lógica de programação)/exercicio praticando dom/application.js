
class application {
    addProperty() {
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        let property = new property(kind, area, rented)
        this.addOnPrompertiesList(property)
        this.clenForm()
    }

    addOnPrompertiesList(property) {
        let listElement = document.createElement("li")
        let propertyInfo = " Tipo: " + property.kind + " (Área: " + property.area + "m²)"
        if(property.rented) {
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        }
        listElement.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)
        document.getElementById("properties").appendChild(listElement)
    }
    createRantalMark() {
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "Alugado"
        return rentedMark
    }

    createRemoveMark() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    cleanform () {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }
}