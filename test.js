// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// start second test
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js') 

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)

})

test("one dollar should be 106.58 in yen ", function(){
    //import the fucntion from the app.js
    const {fromDollarToYen}= require('./app.js')

    //use the function like it supposed to be used
    const yen =fromDollarToYen(4.5)

    //
    const expected = 4.5 *(127.9/1.2);

    //this is the comparison for the unit test
    expect(fromDollarToYen(4.5)).toBe(479.62500000000006);
})

test("one yen should be 0.0078 in pound", function(){

    //import the function from the app.js
    const {fromYenToPound} =require('./app.js')

    //use the function like its supposed to be used
    const pound = fromYenToPound(5.6);

    //
    const expected = 5.6 *(0.8/127.9);

    //this is the comparison for the unit test
    expect(fromYenToPound(5.6)).toBe(0.03502736512900703);
})

