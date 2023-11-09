// Ejercicio opcional:
// Separa en par y impar los números de la siguiente array:
// const numeros = [
//   1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// ];

// Debería de devolver esto:
// [
//    2,  4,  6,  8, 10,
//   12, 14, 16, 18, 20
// ] [
//    1,  3,  7,  9, 11,
//   13, 15, 17, 19


const numeros = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function parImpar(array){
//     let par = [];
//     let impar = [];
//     for (let i in array){
//         if (array[i] % 2 === 0){
//             par.push(array[i])
//         }else{
//             impar.push(array[i]);
//         }
//     }
//     console.log(par, impar);
// }

// parImpar(numeros);

let par = numeros.filter((i) => i % 2 === 0 )
let impar = numeros.filter((i) => i % 2 !== 0 )
console.log(par, impar);

