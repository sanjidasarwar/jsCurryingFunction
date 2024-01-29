/* 
    Question:
        evaluate("sum")(4)(2) => 6
        evaluate("multiply")(4)(2) => 8
        evaluate("divide")(4)(2) => 2
        evaluate("substract")(4)(2) => 2

*/

function evaluate(operator) {
    return function(firstValue){

        return function(secondValue){
            if(operator === "sum") return firstValue + secondValue
            else if(operator === "multiply") return firstValue * secondValue
            else if(operator === "divide") return firstValue / secondValue
            else if(operator === "substract") return firstValue - secondValue
        }
    }
}

let summation = evaluate("sum")(4)(2)
let multiplication= evaluate("multiply")(4)(2)
let division = evaluate("divide")(4)(2)
let substraction = evaluate("substract")(4)(2)

console.log(`sum=${summation}, multi=${multiplication}, division=${division}, sub=${substraction}`);