// const table = (number) => {
//     if (number > 10 || number < 1) {
//         console.log('Apenas números entre 1 e 10')
//     } else {
//         console.log('Ação ainda não definida')
//     }

// }
// table(5)



// const table = (number) => {
//     if(number > 10 || number < 1)
//     console.log('Apenas números entre 1 e 10')


//     for (let i = 1; i <= 10; i++)

//         console.log(`${i} X ${number} = ${number * i}`)
// }

// table(2)



//*Pode ser feito dessa forma tbm


const table = (al) => {
    if (al > 10 || al < 1)
        console.log('Apenas números entre 1 e 10')


    for (let i = 1; i <= 10; i++)

        console.log(`${i} X ${al} = ${al * i}`)
}
const al = Math.floor(Math.random() * (11 - 1) + 1)

table(al)





