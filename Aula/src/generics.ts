// generics <>
// posso passar qualquer nome dentro do <>

const retornaValor = <t>(value: t): t => value;

const mensagem = retornaValor<string>("Hello World"); // conseguimos passar tipos como parametro <>
 
const contar = retornaValor<number>(4);


function GetFirstValueFromArray <tipo>(array: tipo[]) {
    return array[0];
};

const primeiroValorDeStringArray = GetFirstValueFromArray<string>(['1', '2']);

const primeiroValorDeNumerosArray =  GetFirstValueFromArray<number>([10, 20])


// Promises
// para declarar que uma função retornar uma promisse voce pricesa usar generics 

const RetonarPromise = async (): Promise<String> => {
    return "5";
};

// Classes

class gen<T>  {
    zeroValor: T;
    sum: (x: T, y: T) => T;

    constructor (zeroValor: T, sum: (x: T, y: T) => T) {
        this.zeroValor = zeroValor;
        this.sum = sum;
    };
};

const meu = new gen<number>(40, (x: number, y: number) => {
    return x + y;
} )

