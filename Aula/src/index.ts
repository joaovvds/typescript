// tipos basicos
var age: number = 2
const primeiroNome: string = 'João'
const validar: boolean = true || false
let idk: any = 5; //nao recomendado

idk  = 4;
idk = "tanto faz"

const ids: number[] = [1, 2, 3, 4, 5] 
const booleans: boolean[] = [true, false, true, false]
const nomes: string[] = ["joao", "maria", "pedro"]
 
// Tupla
const person: [number, string] = [1, 'OI']

const ListaDeTuplas: [number, string][] = [ // 
    [1, 'joao'],
    [2, 'maria'], 
    // ['pedro', 3] precisa estar na ordem que eu coloquei acima 
]

// Intersections
const productId: string | number | boolean = false //posso colocar um | e deixar os tipos que a variavel vai aceitar

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'esquerda'
}

const direction = Direction.Left //invez de chamar direction.1 e so chamar direciont.Down etc

//Type Assertions - mudar o tipo de uma variavel 

const productName: any = "Bone"; 

// let itemId = productName as string;  // consigo mudar o tipo quando eu estiver atribuindo a uma variavel
let itemId = <string>productName; //recurso mais morderno que faz a mesma coisa do codigo acima


console.log(direction)
