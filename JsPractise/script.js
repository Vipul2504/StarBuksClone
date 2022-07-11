function outerFunction () {
    var outer = `I'm the outer function!`
  
    function innerFunction() {
      var inner = `I'm the inner function!`
      console.log(outer) // I'm the outer function!
    }
  
    // console.log(inner) // Error, inner is not defined
    innerFunction();
  }

  outerFunction();
