/* 
    Question: Infinite currying
    sum(1)(2)(3).....(n)
*/

function sum(a) {
    return function (b) {
        if(b) return sum(a+b);
        return a;
    }
}

let total =sum(1)
// sum(1)(2)(3)()

console.log(total(2)(3)());