function sum() {
  let count = 0;
  for (var i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return count;
}

console.log(sum(1,2,3,4));

function sumSpread(...numbers) {
  let count = 0;
  for (var i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}

console.log(sumSpread(1,2,3,4));

Function.prototype.myBind = function (bindfunc) {
  const args = Array.from(arguments).slice(1);
  const func = this;
  const returnFunction = function () {
    return func.apply(bindfunc, args.concat(Array.from(arguments)));
  };
  return returnFunction;
};
// markov.says.myBind
Function.prototype.myBind2 = function (...args) {
  const first = args[0];
  const rest = args.slice(1);
  return (...inner) => {
    return this.apply(first, rest.concat(inner));
  };
};

function curriedSum(numArgs) {
  const numbers = [];
  const _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce(function (a, b) { return a + b;}, 0);
    }
    else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  const args = [];
  const stephCurry = (arg) => {
    args.push(arg);
    if (numArgs === args.length) {
      return this.apply(null, args);
    } else {
      return stephCurry;
    }
  };
  return stephCurry;
};


Function.prototype.curry = function (numArgs) {
  const args = [];
  const stephCurry = (arg) => {
    args.push(arg);
    if (numArgs === args.length) {
      return this(...args);
    } else {
      return stephCurry;
    }
  };
  return stephCurry;
};
