var nome = 'cleber'
var nota1 = 7
var nota2 = 8
var nota3 = 7
var faltas = 15
const media = (nota1 + nota2 + nota3) / 3
console.log(media)
const limiteDeFaltas = (80 * 25) / 100
if (media >= 7 && faltas <= limiteDeFaltas) {
    console.log('Aprovado')
}
else if (media < 7 && faltas > limiteDeFaltas) {
    console.log('Reprovado por faltas')
}
else if (media < 7 && faltas < limiteDeFaltas) {
    console.log('Reprovado por media')
}
