// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  cb();
}

function sumarArray(numeros, cb) {
  var suma = 0;
  for(var i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i];
}
 cb(suma);
}

// Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
function forEach(array, cb) {
    for(var i = 0; i < array.length; i++) {
    cb(array[i]);
  }
     
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
}

function map(array, cb) {
const newArray = array.map(function (value) {
  return cb(value);
});
return newArray;

 // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
