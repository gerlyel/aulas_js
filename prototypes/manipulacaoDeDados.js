//Manipulando Strings e Numbers


//Contar quantos caracteres tem em uma palavra e quantos digitos tem em um número

let word = 'institucionalizado'
console.log(word.length) //O .length diz a qunatidades de caracteres de uma String

let number = 123456
console.log(String(number).length)/* O .length não diz a quantidade de caracteres de um Type number, 
                                     para saber a quantidades de caracteres de uma variavel do tipo number
                                     tem que fazer a conversão da variavel number(do tipo Number), para o Type String*/


//Transfrmando um número quebrado com 2 casas decimais e trocar . pela , 

let n = 827.10910385

console.log(n.toFixed(2).replace(".", ","))