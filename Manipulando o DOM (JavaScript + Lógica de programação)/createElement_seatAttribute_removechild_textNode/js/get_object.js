//Criar um elemento <li> e um nó de texto.    

/*                                            
caso der appendchild é necessario escrever defer dentro do script do js no html.
Ou colocar o script dentro do body.



var elemento = document.createElement("li");

var texto = document.createTextNode("Item da lista adicionado");

elemento.appendChild(texto);

// Recuperando o elemento lista e
// anexando o elemento <li> no final da lista

var lista = document.getElementsByTagName("ul")[0];

lista.appendChild(elemento);

*/ 

// InserBefore

var lista = document.getElementsByTagName("ul")[0];
var itens = document.getElementsByTagName("li");

// Criando o elemento

var elemento = document.createElement("li");

elemento.textContent = "Outro item";

// Inserindo valor na posição especifica

lista.insertBefore(elemento, itens[1])

// removechild 

lista.removeChild(itens[4])