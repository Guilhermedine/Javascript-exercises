var numeroDaConta = 385
const numeroAoContrario = parseFloat(numeroDaConta.toString().split('').reverse().join('')) * Math.sign(numeroDaConta)
const numeroSomado = numeroDaConta + numeroAoContrario
const numeroSeparado = numeroSomado.toString().split('')
const numerosMultiplicados = numeroSeparado.map((num, index) => {
    const position = index + 1
    return num * position
}).reduce((a, b) => {
    return a + b
}, 0)
const codigoVerificador = numerosMultiplicados.toString().split('')
console.log(codigoVerificador[codigoVerificador.length - 1])
