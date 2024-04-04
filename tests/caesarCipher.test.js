const caesarCipher = require('../modules/caesarCipher')

test(('warping from z to a'), () => {
    expect(caesarCipher("yzab", 3)).toBe("bcde")
});

test(('Preserves case'), () => {
    expect(caesarCipher("Yzab", 3)).toBe("Bcde")
});

test(('Factor negative'), () => {
    expect(caesarCipher("trevor", -3)).toBe("qobslo")
});



