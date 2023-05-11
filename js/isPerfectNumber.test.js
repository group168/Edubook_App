/* eslint-disable no-undef */
const isPerfectNumber = require('./isPerfectNumber.js');
describe('quadraticEquation', () => {
    test('6 is a perfect number', () => {
        expect(isPerfectNumber(6)).toBe(true);
    });

    test('28 is a perfect number', () => {
        expect(isPerfectNumber(28)).toBe(true);
    });

    test('496 is a perfect number', () => {
        expect(isPerfectNumber(496)).toBe(true);
    });

    test('5 is not a perfect number', () => {
        expect(isPerfectNumber(5)).toBe(false);
    });

    test('12 is not a perfect number', () => {
        expect(isPerfectNumber(12)).toBe(false);
    });

    test('100 is not a perfect number', () => {
        expect(isPerfectNumber(100)).toBe(false);
    }); 
});

