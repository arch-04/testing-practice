function caesarCipher(input, factor) {
    let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


    function shiftChar(char, alphabet) {
        let matchIndex = alphabet.indexOf(char);
        let shiftedIndex = (matchIndex + factor) % 26;

        if (shiftedIndex < 0) {
            shiftedIndex += 26;
        }
        return alphabet[shiftedIndex];
    }

    let shifts = "";

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        if (lowerCase.indexOf(char) !== -1) {
            shifts += shiftChar(char, lowerCase);
        } else if (upperCase.indexOf(char) !== -1) {
            shifts += shiftChar(char, upperCase);
        } else {
            shifts += char;
        }
    }
    return shifts;
};

module.exports = caesarCipher;
