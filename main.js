const Array = require('./array')

function main(){
    Array.SIZE_RATIO = 7;

    let arr = new Array();

    arr.push(3);
    
    console.log(arr);

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    
    //The push method resizes the array, then increases the length and sets a single memory address (both O(1) operations)
    //Array { length: 1, _capacity: 7, ptr: 0 }
    //Array { length: 15, _capacity: 56, ptr: 7 }

    console.log(arr);

    arr.pop();
    arr.pop();
    arr.pop();

 

    console.log(arr.get(0))
//The resize event occurs when the browser window changes size.

//The resize() method triggers the resize event, or attaches a function to run when a resize event occurs.
  
const urlify = string => {
    let word = string.replace(' ', '%20');

    console.log(word);

    urlify('hello there');

    const arrayfilter = numbers => {

    };
}
}

    main();
