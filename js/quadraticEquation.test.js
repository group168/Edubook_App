/* eslint-disable no-undef */
const quadraticEquation = require('./quadraticEquation.js');
describe('quadraticEquation', () => {
    test('should return "Phương trình có hai nghiệm ', () => {
        expect(quadraticEquation(1, -5, 6)).toBe('Phương trình có hai nghiệm phân biệt x1 = 3, x2 = 2');
    });

    test('should return "Phương trình có nghiệm kép', () => {
        expect(quadraticEquation(1, -4, 4)).toBe('Phương trình có nghiệm kép x = 2');
    });
    test('should return "Phương trình có một nghiệm', () => {
        expect(quadraticEquation(0, 5, -10)).toBe('Phương trình có một nghiệm x = 2');
    });

    test('should return "Phương trình vô nghiệm." ', () => {
        expect(quadraticEquation(2, 3, 5)).toBe('Phương trình vô nghiệm.');
    });
    test('should return "Phương trình vô nghiệm." ', () => {
        expect(quadraticEquation(0, 0, 5)).toBe('Phương trình vô nghiệm.');
    });
    test('should return "Phương trình có vô số nghiệm." ', () => {
        expect(quadraticEquation(0, 0, 0)).toBe('Phương trình có vô số nghiệm.');
    });
});

