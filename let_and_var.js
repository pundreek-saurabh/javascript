//let is valid in a block and var  is valid in a function . 

function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar);
  
    {
      let baz = "Bazz";
      console.log(baz);
    }
  
    console.log(baz); // ReferenceError
  }
  
  run();