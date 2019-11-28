import test from 'ava';

function evenNumber(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

test('is 4 even?', t => {
    const actualResult = evenNumber(4);
    const expectedResult = true;

    t.not(actualResult);
})

test('is 3 even?', t => {
    const actualResult = evenNumber(3);
    const expectedResult = false;

    t.is(actualResult, expectedResult);
})

test('is 2 even?', t => {
    const actualResult = evenNumber(2);
    const expectedResult = true;

    t.is(actualResult, expectedResult);
})



 