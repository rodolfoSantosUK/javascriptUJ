///////////////////////////////////////
// Lecture: Hoisting

calculaIdade(1987);

function calculaIdade(year) {
   console.log(2016 -  year);
}

//posentadoria(1990);

var aposentadoria = function(ano) {
  console.log(65 - (2016 - ano)) ;
}
 


console.log(idade); 
var idade =  23;

function foo() {
    var idade = 65;
    console.log(idade);  
}

foo();
console.log(idade);  

// udefined 65 23 















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









