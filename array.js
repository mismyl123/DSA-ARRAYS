'use strict';

const Mem = require('./memory');

const Memory = new Mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  push(value) {
    // if the length is greater than the capacity,
    // resize according to the size ratio
    if (this.length >= this._capacity) {
      // resize the array clearing the space for new item
      // each time you go over the capacity, 
      // triple the size of allocated memory
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    // set the memory at pointer plus length to equal value
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    // if the pointer is null
    // throw an error message
    if (this.ptr === null) {
      throw new Error('Out of Memory');
    }
    // copy memory (to the new pointer, from the previous pointer,
    // of the size of capacity
    Memory.copy(this.ptr, oldPtr, this.length);
    // frees the previous pointer's memory using allocate
    Memory.free(oldPtr);
    // set the new capacity equal to the size
    this._capacity = size;
  }

  get(index) {
    // if the index is less than 0 'or' index is greater and equal to
    // the length than throw an error
    if (index < 0 || index >= this.length) {
      throw new Error('Index Error');
    }
    // returns the value of pointer plus index
    return Memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
Array.SIZE_RATIO = 3;

module.exports = Array;