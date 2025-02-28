// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){

    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;

    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){

    //convert the given valueInDollar to yen
    let valueInYen = valueInDollar * (127.9/1.2);

    // return yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){

    //convert the given valueinyen to pound
    let valueInPound= valueInYen *(0.8/127.9);

    //return the pound value
    return valueInPound;
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

