const number = (Math.floor(Math.random() * (100 - 1) + 1))
console.log(number)


if (number % 2 === 0) {

    if (number % 5 === 0) {
        console.log('O número é par e divisível por 5')
    } else {
        console.log(' O número é par e NÃO divisível por 5')
    }

} else {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log('Ele é ÍMPAR, mas não é primo')
            break
        } else {
            if (i === number - 1) console.log('Ele é um número primo')
        }
} 