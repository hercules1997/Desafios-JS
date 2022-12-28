
const avaliado = (Math.floor(Math.random() * (11 - 0) + 0))
//*Poderia ter usado uma nota específica ex: const score = 10 ou 8 ou 9...
switch (avaliado) {
    case 0: console.log('Sua nota foi 0, pois não demonstrou interesse no processo')
        break
    case 1: console.log('Sua nota foi 1, pois os dados apresentado não tinha sentido no processo')
        break
    case 2: console.log('Sua nota foi 2, pois não soube explicar o assunto do processo')
        break
    case 3: console.log('Sua nota foi 3, por ter usado piadas no processo')
        break
    case 4: console.log('Sua nota foi 4, o processo apresentado era uma cópia de outra pessoa')
        break
    case 5: console.log('Sua nota foi 5, não trabalhou em equipe no processo')
        break
    case 6: console.log('Sua nota foi 6, por conta do uso de gírias no processo')
        break
    case 7: console.log('Sua nota foi 7, por causa das pausas desnecessária no processo')
        break
    case 8: console.log('Sua nota foi 8, por conta dos erros de português no processo')
        break
    case 9: console.log('Sua nota foi 9, apenas cores da apresentação não foi coerênte ao processo')
        break
    case 10: console.log('Sua nota foi 10, parabéns você foi o melhor canditado no processo')
        break
}