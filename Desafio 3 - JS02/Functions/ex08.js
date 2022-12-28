



const gerar_Desconstos = (nome, valor, status_Compra, pagamento) => {
    nome = ''
    let descontos = 0
    const primeira_Compra = 'Primeira compra'
    const opcao_Pagamento = 'A vista'
    const cupom = (Math.floor(Math.random() * (21 - 10) + 10))

    if (status_Compra === primeira_Compra && pagamento === opcao_Pagamento) {

        if (valor >= 1000) { descontos += 30 }
        else if (valor >= 500) { descontos += 25 }
        else if (valor <= 500) { descontos += 20 }
    }

    if (status_Compra === primeira_Compra && pagamento !== opcao_Pagamento) {

        if (valor >= 1000) { descontos += 20 }
        else if (valor <= 500) { descontos += 15 }
        else if (valor <= 500) { descontos += 10 }

    }
    if (status_Compra !== primeira_Compra && pagamento === opcao_Pagamento) {

        if (valor >= 1000) { descontos += 20 }
        else if (valor <= 500) { descontos += 15 }
        else if (valor <= 500) { descontos += 10 }

    }
    if (status_Compra !== primeira_Compra && pagamento !== opcao_Pagamento) {
        const msg = console.log(`Obrigado por sua compra! Sua compra foi no valor de R$ ${valor}. Infelismente não teve descontos, mas você acaba de ganhar um cumpom de ${cupom} % que poderá usá-lo na próxima compra conosco. Até mais!`)
        if (valor >= 1000) { msg }
        else if (valor <= 500) {msg}
        else if (valor <= 500) {msg}
    }

    const desconto = () => {
        const calc = valor * descontos
        const valor_desconto = calc / 100
        const valor_pagar = valor - valor_desconto
        console.log(`Valor total da sua compra é de: R$${valor}, Valor já com o desconto R$${valor_pagar}, seu desconto foi de: ${descontos}%`)
        return
    }
    desconto()

}
gerar_Desconstos('junielton', 1520, 'Primeira compra','A vista')


//*Pode ser feito assim tambem
    // const gerar_Desconstos = (nome_Cliente, valor_Compra_Total, status_Compra, parcelado_A_Vista) => {
    //     nome_Cliente = ''
    //     let descontos = 0
    //     const primeira_Compra = 'Primeira compra'
    //     const opcao_Pagamento = 'A vista'
    //     const cupom = (Math.floor(Math.random() * (21 - 10) + 10))


    // if (status_Compra === primeira_Compra && valor_Compra_Total === 1000 && parcelado_A_Vista === opcao_Pagamento) {
    //     descontos += 30
    // }
    // else if (status_Compra === primeira_Compra && valor_Compra_Total >= 500 && parcelado_A_Vista === opcao_Pagamento) {
    //     descontos += 25
    // }
    // else if (status_Compra === primeira_Compra && valor_Compra_Total <= 500 && parcelado_A_Vista === opcao_Pagamento) {
    //     descontos += 20
    // }
    // else if (status_Compra === primeira_Compra && valor_Compra_Total >= 1000 && parcelado_A_Vista !== opcao_Pagamento) {
    //     descontos += 20
    // }
    // else if (status_Compra === primeira_Compra && valor_Compra_Total < 1000 && valor_Compra_Total > 500 && parcelado_A_Vista !== opcao_Pagamento) {
    //     descontos += 15
    // }
    // else if (status_Compra === primeira_Compra && valor_Compra_Total < 500 && parcelado_A_Vista !== opcao_Pagamento) {
    //     descontos += 10
    // }
    // else if (status_Compra !== primeira_Compra && valor_Compra_Total >= 1000 && parcelado_A_Vista === opcao_Pagamento) {
    //     descontos += 20
    // }
    // else if (status_Compra !== primeira_Compra && valor_Compra_Total < 1000 && valor_Compra_Total > 500 && parcelado_A_Vista === opcao_Pagamento) {
    //     descontos += 15
    // }
    // else if (status_Compra !== primeira_Compra && valor_Compra_Total < 500 && parcelado_A_Vista === opcao_Pagamento) {
    //     descontos += 10
    // }
    // else if (status_Compra !== primeira_Compra && valor_Compra_Total >= 1000 && parcelado_A_Vista !== opcao_Pagamento) {
    //     descontos += 10
    // } else if
    //     (status_Compra !== primeira_Compra && valor_Compra_Total < 500 && parcelado_A_Vista !== opcao_Pagamento) {
    //     console.log(`Obrigado por sua compra! Sua compra foi no valor de R$ ${valor_Compra_Total}. Infelismente não teve descontos, mas você acaba de ganhar um cumpom de ${cupom} % que poderá usá-lo na próxima compra conosco. Até mais!`)
    // }


//     const desconto = () => {
//         const calc = valor_Compra_Total * descontos
//         const valor_desconto = calc / 100
//         const valor_pagar = valor_Compra_Total - valor_desconto
//         console.log(`Valor total da sua compra de:R$${valor_Compra_Total}, Valor já com o desconto R$${valor_pagar}, seu desconto foi de: ${descontos}%`)
//         return
//     }
//     desconto()

// }
// gerar_Desconstos('hercules', 1200, 'segunda compra', 'A vista')



