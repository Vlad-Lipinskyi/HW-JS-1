"use strict"

const age = 13; 
console.log(age);

const myName = "Влад";
console.log(myName);

const isStudent = true;
console.log(isStudent)

const isString = "Будь чесний із самим собою й людьми, завжди роби все вчасно, ніколи не здавайся, іди до своїх цілей, навіть якщо все погано";
console.log(isString)

let myNumber = 8;
myNumber = myNumber + 10;
console.log(myNumber)

const myNull = null;
console.log(myNull)

const writeName = prompt("Яке ваше імя:");
alert("Доброго дня!" + writeName);


let userConfirm = confirm("Ви підтверджуєте дію?");
if (userConfirm) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert("Увага! Дія небезпечна.");
let dangerousActionConfirm = confirm("Ви підтверджуєте виконання небезпечної дії?");
if (dangerousActionConfirm) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}