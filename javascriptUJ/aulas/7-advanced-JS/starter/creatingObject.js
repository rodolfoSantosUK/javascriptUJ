
var pesssoaPrototype = {
  calcularIdade: function () {
      console.log(2016 - this.dataNascimento);
  }
};

var john = Object.create(pesssoaPrototype, {
   nome : {value : 'Jane' },
   dataNascimento : {value: 1969 },
   emprego : {value : 'designer'}
});


console.log(john.calculateAge());   
//                                                                                                                                                                                                                            
