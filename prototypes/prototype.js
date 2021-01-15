/*
        Type conversion (typecasting) vs Type coersion

        * Alteração de um tipo de dado para outro tipo


        console.log('9' + 5) Vai concatenar e a saída de dado vai ser: 95

        Se antes da String '9' for adicionado um Number(), o type String '9' vai virar um type Number ocorredo uma conversão de dados
        
        por exemplo console.log(Number('9') + 5) a saída de dado vai ser uma soma resultando no resultado: 14
*/


//Convertendo String para Number

let string = '123'
console.log(Number(string))

//Convertendo Number para String

let number = 321

console.log(String(number))
