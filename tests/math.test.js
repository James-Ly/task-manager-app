const { calculateTip, fahrenheitToCelcius, celsiusToFahrenheit, add } = require('../src/math.js')

// test('Hello World', () => {

// })

// test('This should fail', () => {
//     throw new Error('Failure')
// })

/*************
 * TEST IN THE MATH.JS FILE
 *************/

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    // if (total !== 13) {
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32F to 0 C', () => {
    const result = fahrenheitToCelcius(32)
    expect(result).toBe(0)
})

test('Should convert 0C to 32F', () => {
    const result = celsiusToFahrenheit(0)
    expect(result).toBe(32)
})

//When the test is asynchronous -> add done to the parameter
// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    add(2, 3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})

test('Should add two numbers async/ await', async () => {
    const sum = await add(10, 22)
    expect(sum).toBe(32)
})