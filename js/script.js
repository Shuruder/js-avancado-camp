var obj = {
    showContext: function showContext() {
        //o this aqui auxilia no contexto de invocação
        //o contexto de invocação executa a referencia baseada onde é invocada
        //console.log(this)
        //nesse caso também podemos invocar da seguinte forma
        this.log('teste'); 

        //outra forma de armazenar o contexto é criar uma variavel e armazenar o this
        // var _that = this; //dessa forma bastava usar _that para invocar o contexto
        // lado negativo é deixar um pouco poluido o código, e isso é resolvido com arrow function.


        
        /*setTimeout(function() {
            this.log('after 1000ms');
        }.bind(this), 1000); //bind ou apply fixa o contexto da função resolvendo possiveis problemas de contexto independente da onde foi invocada
    },
    log: function log(value) {
        console.log(value);
    }*/

    // this = obj
    // dessa forma não precisamos mais armazenar o this em variaveis e nem o bind
    setTimeout(function() => {
            this.log('after 1000ms');
        }, 1000); //bind ou apply fixa o contexto da função resolvendo possiveis problemas de contexto independente da onde foi invocada
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();

var sumOld = function(a, b){
    return a + b;
};

// Propriedade Hoishim? - capacidade de executar funções fora de ordem
// obs: não funciona com arrow functions

log('teste');

function log(value){
    console.log(value);
}

// Arrow functions

var createObj = () => ({ test: 123})

console.log(createObj());

// função construtora
// obs: Não posso fazer o mesmo com arrow function

function Car() {
    this.foo = 'bar';
}

/* Erro em Arrow function - Car n é construtor

var Car = () => {
    this.foo = 'bar';
};

*/

console.log(new Car());

