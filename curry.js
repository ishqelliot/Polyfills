const curry = (cb) => {
    let args = [];
    function foo(a,b,c) {
        args.push(...arguments);
        if(args.length === 3){
            const res = cb(...args);
            args = [];
            return res;
        }
        return foo;
    }
    return foo;
}
const join = (a,b,c) => {
    return `${a}_${b}_${c}`
  }
  

const curriedJoin = curry(join);
console.log(curriedJoin);
console.log(curriedJoin(1)(2,3)); //1_2_3
console.log(curriedJoin(1,2)(3)); //1_2_3
console.log(curriedJoin(1)(2)()()(3)); //1_2_3
console.log(curriedJoin(1,2,3)); //1_2_3

//-------------------------------------------------------------------------
const baseFun = (base) => {
    let sum = base;
    return (num) => {
        sum = num + sum;
        return sum;
    }
}

const addToBase = baseFun(6);
console.log(addToBase(10)(2));
console.log(addToBase(21));
