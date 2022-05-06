const { getScore } = require('./password-score');

describe('getScore', () => {
    test('Returns an object with the properties total, len, let, num, spec, cap. Each property is initially 0', () => {
        const result = getScore('');
        expect(typeof result).toBe('object');
        expect(result).toEqual(
            {
                total: 0, 
                len: 0, 
                let: 0, 
                num: 0, 
                spec: 0,
                cap: 0
            });
    });
    test('Adds between 0 and 3 to a score for length.', () => {
        expect(getScore('a2c').len).toBe(1);
        expect(getScore('bob').len).toBe(1);
        expect(getScore('abcd').len).toBe(2);
        expect(getScore('12345').len).toBe(2);
        expect(getScore('abc4d£f').len).toBe(2);
        expect(getScore('abcdefghi').len).toBe(2);
        expect(getScore('1234567890123').len).toBe(3);
    });
    test('Adds between 0 and 3 to a score for numbers, when length is above 8.', () => {
        expect(getScore('abcdefghijklmn').num).toBe(0);
        expect(getScore('a2c').num).toBe(0);
        expect(getScore('abcd3fgh').num).toBe(0);
        expect(getScore('abcdefgh1').num).toBe(1);
        expect(getScore('abcdefgh123').num).toBe(2);
        expect(getScore('1234567890123').num).toBe(3);
    });
    test('Adds between 0 and 3 to a score for special characters (! @ £ # $ % ^ & *), when length is above 8.', () => {
        expect(getScore('abcde123fghijklmn').spec).toBe(0);
        expect(getScore('abcde!!').spec).toBe(0);
        expect(getScore('abcdefgh!').spec).toBe(1);
        expect(getScore('ab*defghi').spec).toBe(1);
        expect(getScore('*bcd£fghi').spec).toBe(2);
        expect(getScore('*bcd£fgh!').spec).toBe(2);
        expect(getScore('12345678!*$#').spec).toBe(3);
        expect(getScore('1^23*45!*$%£67890123').spec).toBe(3);
    }); 
    test('Adds between 0 and 3 to a score for the % letters in the whole password, when the password has a length of over 8.', () => {
        expect(getScore('abcdefghij1').let).toBe(1);
        expect(getScore('12efghijklmnopqrstuvw!').let).toBe(1);
        expect(getScore('ab*defghi').let).toBe(1);
        expect(getScore('abcde123fghijklmn').let).toBe(2);
        expect(getScore('123defghij').let).toBe(2);
        expect(getScore('abcdefgh12345').let).toBe(2);
        expect(getScore('123456789').let).toBe(3);
        expect(getScore('12345abcde').let).toBe(3);
    }); 
    test('Adds between 0 and 3 to a score for the number of capitals in the password, when the password has a length of over 8.', () => {
        expect(getScore('abcdefghij').cap).toBe(0);
        expect(getScore('abcdEfghijklm123').cap).toBe(1);
        expect(getScore('a3abbccDDefhi1j3kl').cap).toBe(1);
        expect(getScore('abCDe123fghijKlmn').cap).toBe(2);
        expect(getScore('123DEfghIJ').cap).toBe(2);
        expect(getScore('abcdefghIJKLM').cap).toBe(3);
        expect(getScore('12345ABCDEFGHIJKLMNO').cap).toBe(3);
    });
    test('Total returned as a property of score is the summation of all the other properties.', () => {
        expect(getScore('iyaxap22').total).toBe(2);
        expect(getScore('zoQIqo!611').total).toBe(9);
        expect(getScore('ATac4ti5vi9').total).toBe(7);
        expect(getScore('password123').total).toBe(6);
        expect(getScore('a!ZNNrAa5S*?').total).toBe(10);
        expect(getScore('fG82jcDqQbUDY').total).toBe(10);
        expect(getScore('!qpL2UH23pxY2B').total).toBe(12);
        expect(getScore('REjytgm2s!*2N').total).toBe(11);
        expect(getScore('12345678!*$#').total).toBe(11);
        expect(getScore('1^23*45!*$%£67890123').total).toBe(12);
    });
});