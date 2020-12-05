const Array = require('./array')

function main(){
    
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

  // 1. 
  // Add an item to the array
  // Add an item to the array
  arr.push(3);  // length: 1, capacity: 3, ptr: 0
  arr.push(5);  // length: 2, capacity: 3, ptr: 0
  arr.push(15); // length: 3, capacity: 3, ptr: 0
  arr.push(19); // length: 4, capacity: 12, ptr: 3
  arr.push(45); // length: 5, capacity: 12, ptr: 3
  arr.push(10); // length: 6, capacity: 12, ptr: 3
  
  // 2.
  // when the array length reached the initial capacity of 3,
  // capacity is increased by tripe ((3 + 1) * 3), pointer position
  // is moved to 3
  arr.pop(); // length: 5, capacity: 12, ptr: 3
  arr.pop(); // length: 4, capacity: 12, ptr: 3
  arr.pop(); // length: 3, capacity: 12, ptr: 3
  
  // 3.
  // three items were removed from the end of the array
  // resulting in new length of 3, but the capacity and ptr stays the
  // same, as array was not resized or relocated
  arr.pop();
  arr.pop();
  arr.pop();

  // 4.
  arr.push('tauhida');
  // this returns NaN because our Memory class only accepts 
  // arrays of numbers, (Float64Array)
  console.log(arr.get(0));
    console.log(arr);
}

main();