// Enhanced Object Literals

//maneira classica de declarar objetos
/*
var obj = {
    prop1: 'DIO';
}
*/

// Em Enhanced Object Literals

var prop1 = 'Digital Innovation One'

var obj = {
    prop1
};

console.log(obj);

// Isso pode ser feito também para funções
// Dessa forma elimina a necessidade de repetir palavras

function method1() {
    console.log('method called');
}

var obj2 = {
    method1
}; 

obj2.method1();

// Funciona também para omitir function

var obj3 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj3.sum(1, 5));

//  Outra forma de operação

/*
var propName = 'test';

var obj4 = {};

obj4[propName] = 'prop value';

console.log(obj4);
*/

// com o ES6 encurta o código centralizando as declaração do objeto literal
var propName = 'test';

var obj4 = {
    [propName + 'concat']: 'prop value'
};

console.log(obj4);