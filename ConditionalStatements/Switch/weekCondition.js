var dia = new Date()
var diaSemana = dia.getDay()



switch(diaSemana) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Lunes')
        break

    case 2:
        console.log('Martes')
        break

    case 3:
        console.log('Miércoles')
        break

    case 4:
        console.log('Jueves')
        break

    case 5:
        console.log('Viernes')
        break

    case 6:
        console.log('Sábado')
        break

    default: 
        console.log('fecha no encontrada')
        break
}
