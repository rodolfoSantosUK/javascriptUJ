var budgetController = (function () {
   
    var x  = 23;
    var add = function(a) {
        return x + a ;
    }

    // Padrão de módulo retorna um objeto contendo todas as funções   
    return {
        publicTest: function (b) {
            return add(b);
        }
    }

})();


                  // função anonima envolvida entre parenteses que é imediatamente executada 
var UIController = (function(){
 // Some code
})();


var controller = (function (budgetCtrl, UiCtrl){
  
    var z = budgetCtrl.publicTest(5);
 
      return {
           outroModuloPublico : function() {
               console.log(z);
           }
      }

})(budgetController, UIController);