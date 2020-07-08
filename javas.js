'use strict'

// //  CAFE
// let Nombredelcafe = '';
// //  Nombredelcafe = prompt ('Nombre del cafe que desea');


// function cafe (Nombredelcafe){

//     return `aqui esta su  ${Nombredelcafe}`
// }
// console.log(cafe(Nombredelcafe));

// // funcion sin parametros  

// function Flash(){

// return  'Corre barry corre';
// }

// console.log(Flash);

// // Funcion con parametros 
// let numeroUno=0;
// let numeroDos=0;
// numeroUno= parseInt(prompt('Primer numero:'));
// numeroDos= parseInt(prompt('segungo numero:'));
// function operacion (numeroUno, numeroDos){

// return numeroDos+numeroUno;
// }
// console.log(operacion(numeroDos,numeroUno));
// let nombre ='Alejandro Lopez ';
// let age = '17';
// let havechildren = false;
// let studies={

//     nombre: 'Javiera Londoño',
//     años:2,
// }
// let games =['GoW','CoD','DmC'];
// console.log(nombre);
// console.log(age);
// console.log(havechildren);
// console.log(studies);
// console.log(games[2]);

// Funciones Anonimas
const sum = function(a,b){

    return a+b;
}
console.log(sum(3,3));

// Parametros y valores de retorno
function Multiplicacion(a,b){
    const resul = a*b;
    return resul;
} 
console.log(Multiplicacion(4,3));

// Ambitos de la variable 
const global = 'Global';
// Aseguramos que entra en un bloque 
if ('2'===2) {
    const global = ' No Global';
    const noGlobal = 'No Global';
    console.log(global);
     console.log(noGlobal);
}
console.log(global);
// console.log(noGlobal);

// FUNCIONES FLECHAS

const multi = (a,b) =>{
    return a*b
}
console.log(multi(98,4))