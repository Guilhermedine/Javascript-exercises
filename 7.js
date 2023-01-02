var numero = [4 , 4 , 4 , 4 , 4 , 4]
var menorParaMaior = numero.sort((a, b) => a - b) 
console.log(menorParaMaior)

var maiorParaMenor = numero.sort(function (a, b) {
    return b - a
}) 
console.log(maiorParaMenor)

const acharIguaiszinhos = (array) => array.filter((item, index) => array.indexOf(item) !== index)
const itemDuplicado = acharIguaiszinhos(numero);
console.log(itemDuplicado);
const todosIguaiszinhos = (arr) => arr.every(val => val === arr[0]);
console.log(todosIguaiszinhos(numero))


