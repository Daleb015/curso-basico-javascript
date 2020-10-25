var estudiantes = ['Daniel', 'Pedro', 'Juan']

function saludarestudiantes (estudiante) {
  console.log(`Hola, ${estudiante}`)
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarestudiantes(estudiantes[i])
}

for (var estudiante of estudiantes) {
  saludarestudiantes(estudiante)
}

estudiantes.forEach(element => {
  console.log(`Hola, ${estudiante}`)
})

var estudiantes = ['Daniel', 'Pedro', 'Juan']

function saludarEstudiantes2 (estudiante) {
  console.log(`Hola, ${estudiante}`)
}

while (estudiantes.length > 0) {
  console.log(estudiantes)
  var estudiante2 = estudiantes.shift()
  saludarEstudiantes2(estudiante2)
}
