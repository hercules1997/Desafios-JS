
const carlos = {
    name: "Carlos",
    age: "33",
    sex: 'Male',
    profission: 'Porteiro',
    nacionality: "Brasileira",
};

const Leonardo = {
    name: "Leonardo",
    age: "18",
    sex: 'Male',
    profission: 'Motorista',
    nacionality: "Brasileira",
};

const jessica = {
    name: "Jessica",
    age: "23",
    sex: 'Female',
    profission: 'Programadora',
    nacionality: "Italiana",
};

const patricia = {
    name: "Patricia",
    age: "18",
    sex: 'Female',
    profission: 'Analista',
    nacionality: "Espanhola",
};

const Gabriel = {
    name: "Gabriel",
    age: "48",
    sex: 'Male',
    profission: 'Contador',
    nacionality: "Brasileira",
};

const person = [carlos, Leonardo, jessica, patricia, Gabriel]
const maiorDeIdade = 18
const serDoBrasil = 'Brasileira'

const aprovado = 'foi aprovado no processo'
if ((carlos.age >= maiorDeIdade) && (carlos.nacionality === serDoBrasil)) {
    console.log(carlos.name, aprovado)
} else {
    console.log('foi reprovado no processo')
}