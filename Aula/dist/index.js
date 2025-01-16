"use strict";
// tipos basicos
var age = 2;
const primeiroNome = 'João';
const validar = true || false;
let idk = 5; //nao recomendado
idk = 4;
idk = "tanto faz";
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const nomes = ["joao", "maria", "pedro"];
// Tupla
const person = [1, 'OI'];
const ListaDeTuplas = [
    [1, 'joao'],
    [2, 'maria'],
    // ['pedro', 3] precisa estar na ordem que eu coloquei acima 
];
// Intersections
const productId = false; //posso colocar um | e deixar os tipos que a variavel vai aceitar
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
