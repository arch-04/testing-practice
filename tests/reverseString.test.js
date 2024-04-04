const reverseString = require('../modules/reverseString')

test('check if string is reversed 1', () => {
    expect(reverseString('john')).toBe('nhoj')
})

test('return empty string', () => {
    expect(reverseString('')).toBe('')
})