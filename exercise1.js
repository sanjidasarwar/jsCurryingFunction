/* 
    greet function receive a parameter greetings and return a funtion. so if we store the greet function in a variable it will store the returned function and the value of greetings will be store in closure. like
      let a = function(firstName){
                    return function(lastName){
                        console.log(greetings+firstName+lastName);
                    }
                }
     now if we call a() its taking a parameter firstName and returning a function. so when we store the returned function in a variable it will store the second returned function and the value of firstName will be store in closure.

      let b = function(lastName){
            console.log(greetings+firstName+lastName);
        }

    now when we call b() with a parameter lastName, in browser console it will so all the three variable greetings, firstName, lastName. Function b will get the value of greetings and firstName from the clouser.

*/

function greet(greetings){
    return function(firstName){
        return function(lastName){
            console.log(greetings +', '+' '+ firstName + lastName);
        }
    }
}

greet("Hello")("Mr.")("John");