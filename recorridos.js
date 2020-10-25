var articulos = [
  {
    nombre: 'Bicicleta',
    costo: 20000
  },
  {
    nombre: 'Casa',
    costo: 500000
  }
]

var articulosfiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500
})

console.log(articulosfiltrados)

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre
})

console.log(nombreArticulos)

var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.costo === 'Bicicleta'
})

console.log(encuentraArticulo)

articulos.forEach(function (articulo) {
  console.log(articulo.nombre)
})

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700
})

console.log(articulosBaratos)
