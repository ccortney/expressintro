const express = require('express');
const calculator = require('./calculators');
const ExpressError = require('./expressError')


const app = express();


app.get('/', (req, res) => {
    return res.send("HELLO!!!!!!!!!!")
})

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Pass in a query key of nums with a comma-separated list of numbers.', 400)
    }

    let nums = req.query.nums
    if(nums.includes(",,")) {
        throw new ExpressError('Separate your list of numbers with a single comma', 400)
    }
    const calc = new calculator.Calculator(nums);

    if (calc.nums instanceof Error) {
        throw new ExpressError(calc.nums.message);
    }

    const response = {
        operation: "mean", 
        value: calc.mean()
    }
    return res.send(response)
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('Pass in a query key of nums with a comma-separated list of numbers.', 400)
    }
    let nums = req.query.nums
    if(nums.includes(",,")) {
        throw new ExpressError('Separate your list of numbers with a single comma', 400)
    }
    const calc = new calculator.Calculator(nums);
    if (calc.nums instanceof Error) {
        throw new ExpressError(calc.nums.message);
    }

    const response = {
        operation: "median", 
        value: calc.median()
    }
    return res.send(response)
})

app.get('/mode', (req, res, next) => {

    if (!req.query.nums) {
        throw new ExpressError('Pass in a query key of nums with a comma-separated list of numbers.', 400)
    }
    let nums = req.query.nums
    if(nums.includes(",,")) {
        throw new ExpressError('Separate your list of numbers with a single comma', 400)
    }
    const calc = new calculator.Calculator(nums);
    if (calc.nums instanceof Error) {
        throw new ExpressError(calc.nums.message);
    }

    const response = {
        operation: "mode", 
        value: calc.mode()
    }
    return res.send(response)
})

app.use((req, res, next) => {
    const e = new error.ExpressError("Page Not Found", 404);
    next(e);
})

app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function() {
    console.log('App on port 3000')
})