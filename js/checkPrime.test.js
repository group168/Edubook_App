/* eslint-disable no-undef */
const checkPrime = require('./checkPrime');
describe('math2.js test', ()=>{

    test('should test check prime', ()=>{

        checkPrime(-8);
    });
    test('should test check primeNT', ()=>{

        checkPrime(8);
    });
    test('should test  check prime', ()=>{

        checkPrime(12);
    });


});