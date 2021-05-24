// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    const matriz = [];
  for( x in objeto) {
    matriz.push([x, objeto[x]])
  }
  return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    var contador = {}; 
    for(var i in string){
        contador[string[i]] = ( contador[string[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    return contador;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string1=[];
  var string2=[];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      string1.push(s[i]);
    }
    else {
      string2.push(s[i]);
    }
   }
  
  return string1.join('') + string2.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mirror = str.split(' ').map(function (x) {
    return x.split('').reverse().join('');
  }).join(' ');
  return mirror;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  let cadena= numero.toString();
  let invertida = '';
  
  invertida = cadena.split('').reverse().join('');
  if(cadena === invertida){
  return 'Es capicua';
  }
  return 'No es capicua';

}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  var nuevaCadena = [];
  for (var i = 0; i < cadena.length; i++) {
    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i]!== 'c') {
      nuevaCadena.push(cadena[i]);
    }
}
  return nuevaCadena.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var i = 0; i < arr.length; i ++ ){
    var aux = arr[i];
    var j = i - 1
    while (j >= 0 && aux.length < arr[j].length) {
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = aux;
}
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var coincidence = [];
for(var i=0;i<arreglo1.length;i++)
{
  for(var j=0;j<arreglo2.length;j++)
  {
    if(arreglo1[i] === arreglo2[j]) {
      coincidence.push(arreglo1[i]);
    }
  }
}
return coincidence;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};