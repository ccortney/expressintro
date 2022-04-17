const calculator = require('./calculators');


test("convert string to array of numbers", function() {
    let calc = new calculator.Calculator("1,3,5,7");
    let arr = [1, 3, 5, 7];
    expect(calc.nums).toEqual(arr)
})

test("mean function", function() {
    let calc = new calculator.Calculator("1,3,5,7");
    expect(calc.mean()).toEqual(4)
})

test("mode function", function() {
    let calc = new calculator.Calculator("1,3,3,7");
    expect(calc.mode()).toEqual(3)
})

test("median function - even length", function() {
    let calc = new calculator.Calculator("1,3,5,7");
    expect(calc.median()).toEqual(4)
})

test("median function - odd length", function() {
    let calc = new calculator.Calculator("1,3,5,7,9");
    expect(calc.median()).toEqual(5)
})