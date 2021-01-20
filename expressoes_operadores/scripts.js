/* Expressões e Operadores 

- Expressions
- Operators
    Binary
    Unary
    Ternary

*/ 

let number //expressões é qualquer linha de código que resolve alguma coisa no Js

// Expresion new
/*
    * left-hand-side expression
    * criar um novo objeto

 */

 let nome= new String('Mário')
 nome.surName = 'Gerlyel'
 let age = new Number(18)

 console.log(nome.surName, age)

let data = new Date('2021-01-20')

console.log(data)

/*
    typeof
    delete
*/
const person = {
    name: 'Mário',
    age: 18
}
delete person.age

console.log(person)

/*
    FALSY:
    Quando u  valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(0? 'verdadeiro' : 'Falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    infinity
    -infinity

*/

console.log( {} ? 'verdadeiro' : 'falso')