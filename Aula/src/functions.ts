// const sum =  (x: number, y: number) => {
//     return x + y;
// };

// console.log(sum(1, 4))


// usando interface com funções abaixo:
interface MathFunc {
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number): number => {
    return x + y;
};

const sub: MathFunc = (x: number, y: number): number => {
    return x - y;
};

const Value = sum(2, 3);

const log = (mensagem: string): void => { //quando eu coloco void eu digo que essa função nao vai ter nenhum return
    console.log(mensagem)
};
