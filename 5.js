var trabLab = 5
var avaliaçaoSemes = 9
var exameFinal = 9
const mediaPonderada = (trabLab * 2 + avaliaçaoSemes * 3 + exameFinal * 5) / 10
console.log(mediaPonderada)
if (mediaPonderada < 5.0){
    console.log('conceito E')
}
else if (mediaPonderada > 5.0 && mediaPonderada < 5.9){
    console.log('conceito D')
} 
else if (mediaPonderada > 6.0 && mediaPonderada < 6.9){
    console.log('conceito C')
}
else if (mediaPonderada > 7.0 && mediaPonderada < 7.9) {
    console.log('conceito B')
}
else if (mediaPonderada > 8.0) {
    console.log('conceito A')
}