// Part2 de Rest, Spread e Destructing
// Destructuring Assigment
const separa = ("--------------------");

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// jeito muito custoso, mas resolvendo com ES6

var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 
    'Banana', 
    'Orange',
    ['Tomato']
]

// mesmo resultado, mais enxuto
console.log(apple, apple2, tomato2);
console.log(separa);
// mas cuidado com quebra de array dentro de array,
// pois é necessário iniciar o array com um valor no destructuring
// "Dois niveis de destructuring

var obj = {
    name: 'Gabriel'
};

var name = obj.name;

var { name } = obj;

console.log(name);

// Destructuring com objetos
// sem usar

var arr2 = [{ name: 'Apple', type: 'fruit'}];
var obj2 = {
    name: 'Brandini',
    props: {
        age: 26,
        favoriteColors: ['Black', 'Blue']
    }
};

//var name = obj2.name;
//var age = obj.props.age;
//var fruit1 = arr[0].name;

// usando destructuring
// no var indicamos o objeto que queremos quebrar e onde vamos atribuir (direita para esquerda)
var {name} = obj2;
// e podemos usar novamente a ideia de clone do ES6
var{name: name2} = obj2;
name2 = 'Shuruder'; //criou nova variavel sem alterar o obj2

// agora quebrando objeto dentro de objeto
// Destructuring de multiniveis com array
var {
    props: { age: age2, favoriteColors: [color1, color2] } //mesmo não sendo declaração customizada precisamos dos :
} = obj2;

var [{ name: fruitName }] = arr2;
console.log(fruitName);

console.log(separa);
// Com functions

function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5, 5]));

// destructuring

function sumD([a, b] = [0, 0]) { //podemos ainda impor default values na segunda caixa dessa forma vai funcionar até sem valores quando chamado
    return a + b;
}

console.log(sumD([5, 6]));