var tipo = 2
var situação = 'N'
var valor = 500

function valAlim () {
    if (valor <= 25){
        return valor * 1.05;
    } else { 
        return valor * 1.12;
    }
}
    console.log(valAlim())
    let valImp = 0

if (situação == 'R') {
    valImp = valAlim() - (valAlim() * 0.05)
    console.log(valImp)
} else {
    valImp = valAlim() - (valAlim() * 0.08)
    console.log(valImp)
}

if (valImp <= 50.00){
    console.log('Produto barato')
} else if (valImp > 50.00 && valImp <= 120.00) {
    console.log('Produto normal')
} else { 
    console.log('Produto caro')
} 

