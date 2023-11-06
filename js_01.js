// VARIABLES, pueden variar de tipo durante la ejecución de mi programa

// Se antepone let para asignar la variable para evitar un problema 
let numero1 = 112 // variable de tipo entero
console.log(typeof numero1)

let numero2 = 102.3 // variable de tipo decimal
console.log(typeof numero2)

let texto1 = "esto es un texto" // variable de tipo texto
console.log(typeof texto1)

let verdadero = true // variable de tipo verdadero
console.log(typeof verdadero)


// document.getElementById("js01").innerText = numero1 esta linea es para verlo en html
console.log(numero1)

// variables numericas y operaciones que podemos hacer en JavaScript
let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4

num1 = 300      //ya no hace falta el let por que ya se puso al inicio de la ejecución
let suma = num1 + num2  // suma = num1 + num2
console.log(suma)

let resta = num4 - num3  // resta = num4 - num3
console.log(resta)

let multiplicacion = num1 * num2  // multiplicacion = num1 * num2
 console.log(multiplicacion)

 let division = num1 / num2  // division = num1 / num2
 console.log(division)

//  Si se divide en 0 no pasa nada, da un tipo de variable infinity, otra variable es indefinite y null que no tienen valor

console.log(9 **0.5)  //funcion exponencial

console.log(20 % 3)  //modulo o resto de la división, sirve para saber si un número es par o impar entre otros usos

console.log("la suma es",23123123123123+3123123123123123)

let total = 1 + 2 - 3 * 4 / 5   //primero se ejecuta la multiplicacion luego división, suma y resta, para evitarlo se usan parentesis

console.log(total)

// trabajaremos con String
texto1 = "buenos"
let texto2 = "dias"

let texto_total = texto1 + " " + texto2
console.log(texto_total)

console.log("el texto tiene ", texto_total.length, "caracteres")    //cuenta los caracteres que tiene el texto

console.log(texto_total.toUpperCase())  //funcion para convertir el texto en mayusculas

console.log(texto_total.toLowerCase())  //funcion para convertir el texto en minusculas

let nombre = "vIcTOr peRez".toLocaleLowerCase()  //funcion para convertir el texto en minusculas
console.log(nombre)

let saludo = "buenos dias"
saludo = saludo - "dias" //sera un error de ejecución nos daremos cuenta al verlo en la console

console.log(saludo) //sale error NaN que es el error de ejecución

let num5 = 5
num5 = num5 + 4 // esto es una reasignacion de valor
num5 += 4 // esto es una reasignacion de valor mas corta y utilizada

console.log("num5 vale ", num5)    


