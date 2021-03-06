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

// Transformar letra Maiúscula em minúscula e viceversa

let string = 'Programar é muito bom!!'

console.log(string.toUpperCase())   //Tudo dentro da string fica Maiúsculo/Cacha alta

console.log(string.toLowerCase())   //Tudo dentro da string fica minúsculo/cacha baixa


// Verificar se no texto tem alguma palavra que você queira

let frase = 'Eu canto porque o instante existe e a minha vida está completa. Não sou alegre nem sou triste: sou poeta. Irmão das coisas fugidias, não sinto gozo nem tormento. Atravesso noites e dias no vento. Se desmorono ou se edifico, se permaneço ou me desfaço, — não sei, não sei. Não sei se fico ou passo. Sei que canto. E a canção é tudo. Tem sangue eterno a asa ritmada. E um dia sei que estarei mudo: — mais nada.'


console.log(frase.includes('canto'))



//Manipulando strings e arrays

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Manipulando arrays

//Criando arrays com construtor

let Arrays = new Array(10)
console.log(Arrays)

// contar elementos dentro de um array
console.log([1, 2, 3, 4, 5, "a", "b", "C"].length)

// transformar uma cadeia de caracteres em elementos de um array

let Word = "Manipulação"
console.log(Array.from(Word))

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("node.js")
//adicionar um item no começo
techs.unshift("sql")
// remover no fim
techs.pop()
//remover no começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')

console.log(index)
