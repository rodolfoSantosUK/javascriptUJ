


var Pessoa = function (nome, anoNascimento, job) {
    this.nome =  nome;
    this.anoNascimento = anoNascimento;
    this.job = job;
};


// Para adicionar uma função ao objeto Pessoa usando o Prototype

Pessoa.prototype.calcularIdade = 
function() {
    console.log(2019 - this.anoNascimento);
};


var joao =  new Pessoa('Joao', 1940, 'programador');

var janaina = new Pessoa('Janaina',1985, 'analista' );

var denis = new Pessoa('Denis', 1970, 'programador');

joao.calcularIdade();

console.log(joao.nome + '  '  +  joao.calcularIdade());