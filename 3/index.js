function sum(a, b) {
    return a + b;
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

let add = curry(sum);

console.log(add(4,5));
console.log(add(4)(5));