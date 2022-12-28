const numberAleatory = (Math.floor(Math.random() * (10 - 1) + 1))
const numberWin = 8

if (numberAleatory === numberWin) {
    console.log('Parabéns, você acaba de ganhar o prêmio!')
} else {
    console.log('Sinto muito, infelismente não foi dessa vez.')
}



//**Outra forma seria criar outra variável com o número ganhador sendo outro Math.radom() */