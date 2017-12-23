const singleton = (function() {
  let instance;
  
  function init() {
    function privateRandomNumber() {
      return Math.floor(Math.random() * (10)) * 10;
    }
    
    const privateNumber = privateRandomNumber();
    
    return {
      publicMethod: function() {
        return privateNumber;
      }
    };
  }
  
  return {
    getInstance: function() {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  }
  
})()

let sing = singleton.getInstance();

console.log(sing.publicMethod());

var sing2 = singleton.getInstance();

console.log(sing2.publicMethod());
