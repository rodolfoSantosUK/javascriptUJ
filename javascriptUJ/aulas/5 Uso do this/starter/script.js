

var john = {

name : 'John',
yearOfBirth : 1990,
calculateAge : function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction() {
        console.log(this);
    }
    innerFunction();
}

} 

john.calculateAge();


var mike = {
    name : 'mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();