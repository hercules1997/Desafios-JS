const first_Number = 50
const seccond_Number = 23
const third_Number = 65

if (first_Number > seccond_Number && first_Number > third_Number) {
    console.log('O primeiro número é o maior deles')
} else if (seccond_Number > third_Number) {
    console.log('O segundo número é o maior deles')
} else {
    console.log('O terceiro é o maior deles')
}

if (first_Number < seccond_Number && first_Number < third_Number) {
    console.log('O primeiro número é o menor deles')
} else if (seccond_Number < third_Number) {
    console.log('O segundo número é o menor deles')
} else {
    console.log('O terceiro é o menor deles')
}