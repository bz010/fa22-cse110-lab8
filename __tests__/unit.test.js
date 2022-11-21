// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone Number #1', () => {
    expect(functions.isPhoneNumber('999-555-1234')).toBe(true);
});
test('Phone Number #2', () => {
    expect(functions.isPhoneNumber('(999)555-1234')).toBe(true);
});
test('Phone Number #3', () => {
    expect(functions.isPhoneNumber('StringNotNum')).toBe(false);
});
test('Phone Number #4', () => {
    expect(functions.isPhoneNumber('99955')).toBe(false);
});

test('Email #1', () => {
    expect(functions.isEmail('me@gmail.com')).toBe(true);
});
test('Email #2', () => {
    expect(functions.isEmail('me@ucsd.edu')).toBe(true);
});
test('Email #3', () => {
    expect(functions.isEmail('NotAEmail')).toBe(false);
});
test('Email #4', () => {
    expect(functions.isEmail('123939483')).toBe(false);
});

test('Strong Password #1', () => {
    expect(functions.isStrongPassword('CharString123_')).toBe(true);
});
test('Strong Password #2', () => {
    expect(functions.isStrongPassword('StringAndInt456')).toBe(true);
});
test('Strong Password #3', () => {
    expect(functions.isStrongPassword('srt')).toBe(false);
});
test('Strong Password #4', () => {
    expect(functions.isStrongPassword('1234')).toBe(false);
});

test('Date #1', () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
});
test('Date #2', () => {
    expect(functions.isDate('01/02/2020')).toBe(true);
});
test('Date #3', () => {
    expect(functions.isDate('stringnodate')).toBe(false);
});
test('Date #4', () => {
    expect(functions.isDate('12333321')).toBe(false);
});

test('Hex Color #1', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('Hex Color #2', () => {
    expect(functions.isHexColor('#FD1')).toBe(true);
});
test('Hex Color #3', () => {
    expect(functions.isHexColor('stringnocolor')).toBe(false);
});
test('Hex Color #4', () => {
    expect(functions.isHexColor('1233321')).toBe(false);
});
