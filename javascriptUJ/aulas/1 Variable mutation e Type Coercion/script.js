
var firstname = "Rodolfo";
var age =  28;

// está ocorrendo uma coerção
// javascript esta alterando o tipo da variavel para string para que possa
// concatenar os valores e exibir na console 
 console.log(firstname + ' ' + age );

 // esses valores sao undefined
 var job, isMarried;
job = 'developer';
isMarried = true ;

console.log(firstname + " tem  " + age + ' anos ' + job + ' ' +  '. Ele é casado ? ' + isMarried );

// aqui esta acontecendo uma mutação de variável
age = 'trinta e tres anos';
job = 'motorista';

alert(firstname + " tem  " + age + ' anos ' + job + ' ' +  '. Ele é casado ? ' + isMarried );

var lastName = prompt('Qual é o seu último nome ? ');
console.log(firstname  +  lastName);


