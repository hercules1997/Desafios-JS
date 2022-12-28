const taxa_Mensal = (valor_Inicial, valor_Atual, total_Meses) => {

    const calculo = (valor_Atual - valor_Inicial)
    const result = calculo / valor_Inicial
    const juros = (result * total_Meses).toFixed(2)
    console.log(`O juros foi de ${juros} %`)
    return juros
}
taxa_Mensal(1000,1200 , 10)