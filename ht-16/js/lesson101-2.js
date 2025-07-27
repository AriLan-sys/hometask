function searchForNumbersGreaterThanTen(array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            result += array[i] + ' '   
        }
    }
    return result
}

function arrayOutput(array) {
    let arr = ''
    for (let i = 0; i < array.length; i++) {
        arr += array[i] + ' '
    }
    return arr
}

const numbers = [5, 10, 13, 8, 19, 27, 3, 9]

console.log('Массив:', arrayOutput(numbers), '\nЧисла массива, которые больше 10:', searchForNumbersGreaterThanTen(numbers))
