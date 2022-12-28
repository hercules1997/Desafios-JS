const pessoas = [
    {
        numeroDeCriancas: 5,
        salario: 3500
    }, {
        numeroDeCriancas: 1,
        salario: 5500
    }, {
        numeroDeCriancas: 3,
        salario: 2500
    }, {
        numeroDeCriancas: 0,
        salario: 8500
    }, {
        numeroDeCriancas: 2,
        salario: 1500
    }, {
        numeroDeCriancas: 10,
        salario: -6500
    },]



function enviarMediaDeCriancasSalario(informacaoDasPessoas) {

    let mediaSalarial = 0
    let mediaCriancas = 0
    let maiorSalario = 0

    for (let i = 0; i <= informacaoDasPessoas.length; i++) {

        const salario = informacaoDasPessoas[i].salario
        const crianca = informacaoDasPessoas[i].numeroDeCriancas

        if (salario > maiorSalario) maiorSalario = salario

        if (salario < 0) {
            console.log(`Média de salário R$${(mediaSalarial / i).toFixed(0)}`)
            console.log(`Média de crianças ${(mediaCriancas / i).toFixed(0)}`)
            console.log(`Maoir salário R$${maiorSalario}`)
            break
        } else {
            mediaSalarial = mediaSalarial + salario;  //*Essa forma é a mesma da debaixo +=
            mediaCriancas += crianca //* Essa aqui +=
        }


    }
}
enviarMediaDeCriancasSalario(pessoas)



//*Segunda opção usando o WHILE


// function enviarMediaDeCriancasSalario(informacaoDasPessoas) {

//     let i = 0;
//     let mediaSalarial = 0
//     let mediaCriancas = 0
//     let maiorSalario = 0

//     while (informacaoDasPessoas[i].salario > 0) {
//         mediaSalarial = mediaSalarial + informacaoDasPessoas[i].salario
//         mediaCriancas += informacaoDasPessoas[i].numeroDeCriancas
//         informacaoDasPessoas[i].salario > maiorSalario ? maiorSalario = informacaoDasPessoas[i].salario : maiorSalario = maiorSalario
//         i++
//     }
//     console.log(`Média de salário R$${(mediaSalarial / i).toFixed(0)}`)
//     console.log(`Média de crianças ${(mediaCriancas / i).toFixed(0)}`)
//     console.log(`Maior salário R$${maiorSalario}`)
// }
// enviarMediaDeCriancasSalario(pessoas)