const numbers = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        console.log('O primeiro é maior')
    } else if (numberOne === numberTwo) {
        console.log('Os números são iguais')
    } else {
        console.log('O segundo é maior')
    }
}
numbers(8, 8)