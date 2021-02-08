console.log('--------------Rest e Spread---------------');
// Conheça Rest e Spread Operator

function sum(a, b) {
    return a + b;
}

console.log(sum(5,5));

// Mas e se eu quisesse somar inumeros argumentos?
// antes do ES6 o normal era fazer o seguinte

function sum2(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value
}

console.log(sum2(5, 5, 5, 2, 3));

// Agora com rest operator ...

function sum3(...args) {
    //console.log(args);
    //console.log(arguments);
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum3(5, 5, 5, 2, 3));

// e quando trabalhando com arrow functions

// vai dar erro de referencia porque o arguments n foi definido
/*
const sum4 = () => {
    console.log(arguments);
}

console.log(sum4(5, 5, 5, 2, 3));
*/

// correção com rest

// vale dizer que dessa forma é bom para trabalhar com alguns frameworks
// pois separa apenas os argumentos que queremos de um restante/montante
const sum5 = (a, b, ...rest) => {
    console.log(a, b, rest);
}

console.log(sum5(5, 5, 5, 2, 3));

//-----

console.log('-------------------');

const sum6 = (...rest) => {
    return multiply.apply(undefined, rest);
}

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

console.log(sum6(5, 5, 5, 2, 3));

console.log('--------rest e spread-----------');

// rest operator, spread operator...
// se escreve da mesma forma, porem o seu funcionamento é contrário e diferente do rest
// quebrando listas e 'espalhando' argumentos
const multiply2 = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum7 = (...rest) => {
    return multiply2(...rest);
}

console.log(sum7(5, 5, 5, 2, 3));