const calculator = require('../modules/calculator');

test('add 1', () => {
    expect(calculator.add(1, 3)).toBe(4);
});

test(('add 2'), () => {
    expect(calculator.add(32, 8)).toBe(40);
});



test(('subtrack 1'), () => {
    expect(calculator.subtract(12, 2)).toBe(10);
});

test(('subtrack 2'), () => {
    expect(calculator.subtract(45, 15)).toBe(30);
});



test(('divide 1'), () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test(('divide 2'), () => {
    expect(calculator.divide(45, 15)).toBe(3);
});



test(('multiply 1'), () => {
    expect(calculator.multiply(5, 5)).toBe(25);
});

test(('multiply 2'), () => {
    expect(calculator.multiply(12, 10)).toBe(120);
});








