const btnTeclado = document.querySelector('[data-js="teclado"]')
const display = document.querySelector('[data-js="display"]')


const elementIsVoid = (element) => {
    return element == '' ? true : false
}

const verificaNegativePositive = (value) => {
    const valorNumeric = value
    if (valorNumeric > 0){
        return 'positive'
    }else if (valorNumeric < 0){
        return 'negative'
    }
}

const changeColorDisplay = (determinante) => {
    if (determinante == 'positive'){
        display.style.backgroundColor = '#00ff7f5c'
        display.style.color = '#4caf50'
    }else if (determinante == 'negative'){
        display.style.backgroundColor = 'rgb(255 0 0 / 22%)'
        display.style.color = 'tomato'
    }
}

btnTeclado.addEventListener('click', e => {
    if (e.target.innerText == 'C'){
        display.innerText = ''
    }else if (e.target.innerText == '='){
        display.innerText = eval(display.innerHTML)
        changeColorDisplay(verificaNegativePositive(display.innerText))
    }else{
        display.innerText += e.target.innerText
    }
})
