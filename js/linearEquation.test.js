/* eslint-disable no-undef */
const linearEquation = require('./linearEquation.js');

test('Phương trình có nghiệm', () => {
    expect(linearEquation(2, 4)).toBe('Phương trình có nghiệm x = -2');
});

test('Phương trình vô nghiệm', () => {
    expect(linearEquation(0, 4)).toBe('Phương trình vô nghiệm.');
});

test('Phương trình vô số nghiệm', () => {
    expect(linearEquation(0, 0)).toBe('Phương trình vô số nghiệm.');
});