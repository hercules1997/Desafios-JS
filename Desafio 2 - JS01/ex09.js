const number_One = (Math.floor(Math.random() * (11 - 0) + 0))
const number_Two = (Math.floor(Math.random() * (50 - 11) + 11))
const number_Three = (Math.floor(Math.random() * (100 - 50) + 50))
const number_For = (Math.floor(Math.random() * (200 - 100) + 100))


const numbers = [number_One, number_Two, number_Three, number_For]
console.log(numbers)

if (number_One % 2 === 0 && number_Two % 2 === 0 && number_Three % 2 === 0 && number_For % 2 === 0) {
    console.log('Todos os numeros são pares')
} else if (number_One % 2 !== 0 && number_Two % 2 !== 0 && number_Three % 2 !== 0 && number_For % 2 !== 0) {
    console.log('Todos os numeros são ímpares')
} else console.log('Todos os númros estão misturados em pares e ímpares')






