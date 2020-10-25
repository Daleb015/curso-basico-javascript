// Ocurre cunado las variables o funciones
// se procesan antes que el codigo

var miNombre

console.log(miNombre)

miNombre = 'Daniel'

// Aqui imprimira undefined porque javascript por el hoisting
// inicializa la variable como undefined

hey()

function hey () {
  console.log('Hola ' + miNombre)
}
