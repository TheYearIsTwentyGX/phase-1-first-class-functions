const receivesAFunction = passFunc => passFunc();
const returnsANamedFunction = () => {
    return function named() { console.log("I'm a named function!"); }
}

const returnsAnAnonymousFunction = () => function() { console.log("I'm an anonymous function!"); }