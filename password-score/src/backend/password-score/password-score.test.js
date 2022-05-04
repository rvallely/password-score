const { getScore } = require('./password-score');

describe('getScore', () => {
    test('Returns a number between 0-7 (inclusive).', () => {
        expect(typeof getScore('password')).toBe('number');
    });
    test('Adds 1 to score if password has a length of less than four.', () => {
        expect(getScore('bob')).toBe(1);
        expect(getScore('ab')).toBe(1);
        expect(getScore('a#£')).toBe(1);
        expect(getScore('hello')).not.toBe(1);
    });
    test('Adds 2 to score if password has a length of between 4 and 8 (inclusive).', () => {
        expect(getScore('bobbybob')).toBe(2);
        expect(getScore('he4o')).toBe(2);
        expect(getScore('abcdefg')).toBe(2);
        expect(getScore('hi')).not.toBe(2);
    });
    test('Adds 3 to score when password is between 8 and 12 characters long (inclusive) and the characters are all letters.', () => {
        expect(getScore('abcdefghij')).toBe(3);
    });
    test('Adds 4 to score when password is more than 8 characters long and includes a number.', () => {
        expect(getScore('abcdefghij2')).toBe(4);
        expect(getScore('bobbobbob1')).toBe(4);
        expect(getScore('pass12word')).toBe(4);
        expect(getScore('12pass12word')).toBe(4);
    });
    test('Adds 5 to score when password is more than eight characters includes a number and special character (! @ £ # $ % ^ & *).', () => {
        expect(getScore('bobbob1#2$')).toBe(5);
        expect(getScore('bo#2$bbob1')).toBe(5);
        expect(getScore('*bobbob1#2')).toBe(5);
    });
    test('Adds 6 to score when password is over 12 in length and contains a number.', () => {
        expect(getScore('bobbobbobbob123')).toBe(6);
        expect(getScore('BOBB3OOPPBBOOGG')).toBe(6);
        expect(getScore('6bobbobbobbobHPW')).toBe(6);
    });
    test('Adds 7 to score when password is over 12 in length and contains a number and a special character (! @ £ # $ % ^ & *).', () => {
        expect(getScore('bobbobbob1!2@3#')).toBe(7);
        expect(getScore('BO^BB3OOPPBBOOGG')).toBe(7);
        expect(getScore('£7bo**bbobbobbobHPW')).toBe(7);
    }); 
});