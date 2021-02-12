// rest operator, spread operator
// onde são suados:
// strings, arrays, literal objects e objetos iteraveis
// Objetos iteraveis geralmente são strings e arrays
const separa = '---------------';

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

//spread para transformar array em argumento da função
console.log(separa);

const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments); // se colocados argumentos finitos, então ele filtra o array
}

logArgs(...arr);

// Continuar em 20:36
// unir arrays
console.log(separa);
//const arr2 = arr.concat([5, 6, 7]);
//agora com spread
const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);

console.log(separa);

// No caso de objetos literais é diferente

const obj = {
    test: 123
};

// Ele só funciona dessa forma, e em objetos iteraveis
// comentado em generators
// dito isso não podemos usar para construir um array com spread no objeto
// no caso só pode ser usado para construir novos objetos

const obj2 = {
    ...obj,
    test2: 'hello'
};

// outro detalhe, a ordem das chaves faz toda diferença
// no spread a ultima informação inserida com o mesmo nome, prevalece
// Spread é geralmente usado para criar clones de objetos

// const obj = {}; const obj2 = obj; é diferente de
// const obj2 = {...obj}; dessa forma não altera valores do primeiro

// teste funcional total

const obj3 = {
    test: 123,
    subObj:  {
        test: 123
    }
};

const obj4 = { ...obj3, subObj: { ...obj3.subObj } };

obj4.subObj.test = 456;

console.log(obj2);
console.log(separa);
console.log(obj3);
// dessa forma não vai ser alterado pois o outro obj4 é clone do 3