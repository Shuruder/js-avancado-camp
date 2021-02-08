// Default function Argument
// DFA serve para situações onde caso esqueçamos de declarar um valor
// temos um valor padrão para impedir erros garantindo o funcionamento

/*
function multiply (a, b){
    // essa declaração faz com que b caso não declarado (false) seja igual a 1
    b = b || 1;
    return a * b;
}

console.log(multiply(5));
*/

/*
// com o ES6 podemos definir valores padrão nos argumentos diretamente
// Importante a ordem na argumentação, onde um argumento não pode ser reutiizado se nem foi declarado
function multiply (a = 2, b = 1){
    return a * b;
}

console.log(multiply(5));
*/

// lazy evaluation
// quer dizer que a função só vai ativar quando for chamada
// no caso em que o valor não seja declarado garantindo que seja acessada no momento certo
function randomNumber() {
    console.log('Generating a random number...');

    return Math.random()*10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5));