/* eslint-disable no-undef */
const {binarySearch} = require('./binarySearch.js');

const myArray = [2, 3, 4, 7, 8, 10, 15];
describe('binarySearch.js test', ()=>{
  test('should test add', ()=>{

    expect(binarySearch(myArray, 4));
  });

  test('should test subtract', ()=>{

    expect(binarySearch(myArray, 222));
  });

  test('should test multiply', ()=>{

    expect(binarySearch(myArray, 10));
  });

});