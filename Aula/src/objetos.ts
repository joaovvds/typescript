// Type
type Order = {
    productId: string;
    price: number;
}


type User = { 
    firstName: string; //nao precisa de virgula no final °-°
    age: Number;
    email: string;
    password?: string;  // quando eu coloco como opcional, ela nao e uma string de fato ela e uma 'string e undefined' tomar cuidado ao passar para funcoes
    orders: Order[]; // definir uma lista de strings
    register(): string; //funcao
};

const user: User = {
    firstName: 'Jane',
    age: 20,   
    email: "google@gmail.com",
    password: "1243124",//
    orders: [{productId: '3344', price: 200}], //vai ser uma lsta e cada elemento vai ser um objeto Order
    register() { //usando a funcao que vai me retornar uma string 
        return '2'
    }
}

const printLog = (mensagem?: string) => {}

printLog(user.password!) //colocarndo o ! eu falo que o password realmente existe

// Propriedades opcionais são diferentes do que propriedades de String
// quando eu coloco  ? eu digo que essa objeto e opcional


// Unions

type Author = {
    livros: string[];
}
// & > and
const author: Author  & User = {
    firstName: 'joao',
    age: 20,
    livros: ['100'],
    email:  'joao@gmail.com',
    orders: [], // pode estar vazio
    register() {
        return 'oi';
    },
}

// ==================================================================================
// Interfaces

interface UserInterface {
    readonly nome: string //nao deixa alterar isso depois de criar um objeto
    email: string;
    login(): string; // usando funções na interface
}

const emailUser: UserInterface = {
    email: 'joaovictor@gmail.com',
    nome: 'João',
    login() {
        return 'oi'
    },
}

// emailUser.nome = '2'

interface AuthorInterface {
    books: string[]   
}

// aqui eu posso usar a interface tanto do UserInterface e AuthorInterface 
const newAuthor: UserInterface & AuthorInterface = { 
    email: 'seila@gmail.com',
    nome: 'jane',
    books: ['livros', 'nomes', 'teste'],
    login() {
        return 'oi'
    },
}

// interface e muito parecida com type


// isso aqui abaixo so consigo usar no type
type Grade = number | string
const grade: Grade = 1

