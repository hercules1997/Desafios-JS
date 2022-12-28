const listStudents = [
    { name: 'Hercules', testGrade: 7 },
    { name: 'Silmara', testGrade: 5 },
    { name: 'Sara', testGrade: 8 },
    { name: 'Pedro', testGrade: 2 },
    { name: 'Zimar', testGrade: 10 },
]

//* Com operadores ternários
// const newListStudents = listStudents.map(client => {
//     const newList = {
//         name: client.name,
//         testGrade: client.testGrade,
//         status: client.testGrade >= 7 ? 'Aprovado' : 'desaprovado'
//     }
//     return newList
// })
// console.log(newListStudents)

//* Com IF e ELSE

// const newListStudents = listStudents.map(student => {
//     let aprovacao 

//     if (student.testGrade >= 7) {
//         aprovacao = 'Aprovado(a)'
//     }
//     else {
//         aprovacao = 'Não aprovado(a)'
//     }
    

//     const students = {
//         name: student.name,
//         testGrade: aprovacao
//     }
//     return students
// })
// console.log(newListStudents)




// const list = [
//     { name: 'Hercules', vip: true },
//     { name: 'Silmara', vip: false },
//     { name: 'Sara', vip: false },
//     { name: 'Pedro', vip: true },
//     { name: 'Zimar', vip: true }
// ]

// const newList = list.map(client => {
//     const newList = {
//         name: client.name,
//         vip: client.vip,
//         sector: client.vip ? 'black' : 'Green'
//     }
//     return newList
// })
// console.log(newList)