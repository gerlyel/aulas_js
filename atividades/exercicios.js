/*
    Exercício 1:

        SISTEMAS DE NOTAS ESCOLARES

 */

let nota


function getScore(nota) {

    let notaFinal

    if(nota < 60 && nota >= 0) {
        notaFinal = 'F'
    } else if(nota >= 60 && nota < 70) {
        notaFinal = 'D'
    } else if(nota >= 70 && nota < 80) {
        notaFinal = 'C'
    } else if(nota >=80 && nota < 90 ) {
        notaFinal = 'B'
    } else if(nota >=90 && nota <= 100) {
        notaFinal = 'A'
    } else {
        notaFinal = "Nota inválida"
    }
    
    return notaFinal
}


console.log(getScore(100))
console.log(getScore(88))
console.log(getScore(73))
console.log(getScore(23))
console.log(getScore(65))
console.log(getScore(103))
console.log(getScore(-70))


/*
    Exercício 2:

        SISTEMA DE GASTOS FAMILIAR

 */

 let gastos = {
     receitas: [200, 40.60, 1000.30],
     despesas: [300, 80.00, 295.40]
 }

function soma(array) {
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

 function mostrarGastos() {
    const totalReceitas = soma(gastos.receitas)
    const totalDespesas = soma(gastos.despesas)


    const total = totalReceitas - totalDespesas

    const ok = total >= 0

    let menssagem = 'NEGATIVO'

    if(ok){
        menssagem = 'POSITIVO'
    }
    
    console.log(`Seu saldo é ${menssagem}: ${total}`)
 }

 mostrarGastos()


