var a = 4 + '7'
console.log(typeof a)

// Devolvera String por coercion implicita

var b = 4 * '7'
console.log(typeof b)

// Aqui devuelve un numero y lo hace asi porque como no esta el mas sino un operador numerico,
// javascript asume que queriamos multiplicar

var c = 20
var d = c + ''
console.log(typeof d)

// En este caso nos devuelve un string
// Si quisieramos pasar el 20 a un string sin tener que usar el operador de la suma,
// usariamos coercion explicita asi

var e = String(c)
console.log(typeof e)

// al reves de string a numero

var f = Number(e)
console.log(typeof f)
