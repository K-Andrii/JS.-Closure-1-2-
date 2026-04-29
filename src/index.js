"use strict";

//closure 1
function createLogger(prefix){
    return function(message){
        console.log(`${prefix}: ${message}`);
    }
}

const authLogger = createLogger('AUTH');
const apiLogger = createLogger('API');

console.log('---Closure 1---')
authLogger('User logged in');
apiLogger('Request failed');


//closure 2
function createLimiter(limit){
    if(!Number.isFinite(limit)) return null;
    let counter = 0;

    return () => {
        counter++;
        if(counter <= limit) return 'Ok';
        return 'Error';
    }
}

const limited = createLimiter(2);

console.log('---Closure 2---')
console.log(limited());
console.log(limited());
console.log(limited());

