var ladoA = 4
var ladoB = 5
var ladoC = 6
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log('Forma um triangulo') 

    if (ladoA == ladoB && ladoA == ladoC) {
        console.log('Triangulo equilatero')
    }
    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ) {
        console.log('Triangulo isosceles')
        
    }
    else 
         console.log('Triangulo escaleno')
}

else 
console.log('Os 3 lados não formam um triangulo')
