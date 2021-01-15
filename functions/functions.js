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



//function scope

let pensamento = 'Estou com fome!'                //essa variavel pensamento 
                                // é diferente
function pensar(pensamento){   //desse parametro pensamento
    pensamento = 'Estou com sede!'
    return pensamento
}

console.log(pensar(pensamento)) //a saida de dado desse console.log vai ser: 'Estou com sede!'
console.log(pensamento) //já a saida de dado desse console.log vai ser: 'Estou com fome!'
                        //pois o pensamento da function esta dentro de um escopo, então só será chamada caso a function seja chamada

//arrow function
//Funciona da mesma forma que uma function declarada, só é escrita de outra forma

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Mário')