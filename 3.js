var lugar = "centroOeste"
var tipoDePassagem = "ida"
if (tipoDePassagem == "ida") {
    if (lugar == 'norte') {
        console.log('R$280')
    }
    else if (lugar == 'nordeste') {
        console.log('R$380')
    }
    else if (lugar == 'centroOeste') {
        console.log('R$620')
    }
} else if (tipoDePassagem == "idaEVolta") {
    if (lugar == 'norte') {
        console.log('R$400')
    } else if (lugar == 'nordeste') {
        console.log('R$628')
    }
    else if (lugar == 'centroOeste') {
        console.log('R$1100')
    }
}