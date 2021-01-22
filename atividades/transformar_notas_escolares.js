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
