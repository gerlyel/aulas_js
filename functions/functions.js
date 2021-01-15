//function expression
//function anonymous

//parametros da function
const sum = function(number1, number2){
    console.log(number1 + number2)

}

sum(2, 3) //argumentos


const sum1 = function(number3, number4) {
    total = number3 + number4
    return total;
}
let number3 = 24
let number4 = 35

console.log(`O terceiro número é ${number3}`)
console.log(`O quarto númrero é ${number4}`)
console.log(`A soma do terceiro número ${number3} e do quarto número ${number4} é ${sum1(number3,number4)}`)