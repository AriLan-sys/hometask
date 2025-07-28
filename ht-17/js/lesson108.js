const button = document.querySelector('.btn-1')
let btnIsBlue = false
let btnIsPurple = false
let btnIsGreen = false

button.addEventListener('click', () => {
    if (btnIsBlue) {
        button.style.backgroundColor = '#c53ce757'
        button.textContent = 'Я фиолетовая! Нажми еще раз'
        button.style.height = '100px'
        button.style.maxWidth = '450px'
        btnIsPurple = true
        btnIsBlue = false
    }
    else if (btnIsPurple) {
        button.style.backgroundColor = '#23d5ab63'
        button.textContent = 'Теперь я зеленая! Нажми еще раз'
        button.style.height = '75px'
        button.style.maxWidth = '500px'
        btnIsPurple = false
        btnIsGreen = true
    }
    else if (btnIsGreen) {
        button.style.backgroundColor = '#eeeb5259'
        button.textContent = 'Я желтая! Нажми еще раз'
        button.style.height = '100px'
        button.style.maxWidth = '450px'
        btnIsGreen = false
    } else {
        button.style.backgroundColor = '#23a5d556'
        button.textContent = 'Теперь я голубая! Нажми еще раз'
        button.style.height = '75px'
        button.style.maxWidth = '500px'
        btnIsBlue = true
    }
})