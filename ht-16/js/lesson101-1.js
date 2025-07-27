function greetingsUser (nameUser) { 
    return 'Hello ' + nameUser
}

const nameUser = prompt(`Введите ваше имя :)\nПосле чего посмотрите в консоль`)
console.log(greetingsUser(nameUser))