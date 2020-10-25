// Declarativas
function miFuncion () {
  return 3
}

miFuncion()

// Expresion, también las llaman anonimas.

var miFuncion2 = function (a, b) {
  return a + b
}

// declarativa mas compleja

function saludarEstudiantes (estudiante) {
  console.log(estudiante)
}

saludarEstudiantes('Diego')

function saludarEstudiante2 (estudiante) {
  console.log(`Hola ${estudiante}`)
}

function sumar (a, b) {
  var resultado = a + b
  return resultado
}

var miNombre = 'Diego'

function nombre () {
  var miApellido = 'De granada'
  console.log(`${miNombre} ${miApellido}`)
}
