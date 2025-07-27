function calc(firstNumber, secondNumber, operator) {
    switch (operator) {
        case 'plus':
            return firstNumber + secondNumber
            break;
        case 'minus':
            return firstNumber - secondNumber
            break;
        case 'multiply':
            return firstNumber * secondNumber
            break;
        case 'divide':
            return firstNumber / secondNumber
            break;
        default:
            return `no such operator :(`
            break;
    }
}

console.log(`10 разделить на 5 будет ${calc(10, 5, 'divide')}\n13 отнять 7 будет ${calc(13, 7, 'minus')}\n5 умножить на 48 будет ${calc(5, 48, 'multiply')}\n16 прибавить 35 будет ${calc(16, 35, 'plus')}`)