var limp1 = 10
var alim2 = 50
var vest3 = 121

console.log('APENAS PRODUTOS ALIMENTICIOS SERÃO REFRIGERADOS')

function valLimp () {
    if (limp1 <= 25){
        return limp1 * 1.05;
    } else { 
        return limp1 * 1.12;
    }
}

console.log(valLimp())
    
function valAlim () {
    if (alim2 <= 25){
        return alim2 * 1.08
    } else { 
        return alim2 * 1.15;
    }
}

console.log(valAlim())

function valVest () {
    if (vest3 <= 25){
        return vest3 * 1.10;
    } else { 
        return vest3 * 1.18;
    }
}

console.log(valVest())

const valLimpImp = valLimp() - (valLimp() * 0.08)  
const valAlimImp = valAlim() - (valAlim() * 0.05)  
const valVestImp = valVest() - (valVest() * 0.08) 

console.log(valLimpImp)
console.log(valAlimImp)
console.log(valVestImp)

        
if (valLimpImp <= 50.00){
    console.log('Produto de limpeza barato')
} else if (valLimpImp > 50.00 && valLimpImp <= 120.00) {
    console.log('Produto de limpeza normal')
} else { 
    console.log('Produto de limpeza caro')
} 

if (valAlimImp <= 50.00) {
    console.log('Produto de alimentação barato')
} else if (valAlimImp > 50.00 && valAlimImp <= 120.00){
    console.log('Produto de alimentação normal')
} else {
    console.log('Produto de alimentação caro')
}

if (valVestImp <= 50.00){
    console.log('Produto de vestimenta barato')
} else if (valVestImp > 50.00 && valVestImp <= 120.00){
    console.log('Produto de vestimenta normal')
} else {
    console.log('Produto de vestimenta caro')
}
            
               
            






