// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)   // Função Callback
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
})
// LISTNER: ouvidor, alguém que está ouvindo, a função está ouvindo o click  // Callback

// Função Callback
function handleTryClick(event) {
    event.preventDefault()  // nessa linha to falando: não faça o padrão desse evento, não envie o formulário

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        //screen1.classList.add("hide")
        //screen2.classList.remove("hide")
        toggleScreen()

        /*document
            .querySelector(".screen2 h2")
            .innerText = `acertou em ${xAttempts} tentativas`

        posso deixar da seguinte forma:
        */
        
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""  // para pegar os valores de um INPUT tem que ter o VALUE
    xAttempts++
}

function handleResetClick() {
    //screen1.classList.remove("hide")
    //screen2.classList.add("hide")
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}



// HTML, CSS e JS conversam a partir da DOM
// React, VIu, Angular....essas ferramentas criam uma DOM virtual, e ai a gente não conseguem 
// manipular a DOM dessa forma, não deveríamos. Vamos aprender como o REACT faria o click, 
// ele é quem vai mexer nela para a gente.