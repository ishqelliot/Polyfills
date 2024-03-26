console.log("Script loaded");
const foo = [1,2,3];

//------------------map polyfil-----------------
const myMap = function (callback, thisArg) {
    const length = this.length;
    const result = [];
    for(let i=0;i<length;i++){
        result.push(callback.call(thisArg, this[i], i, this));
    }
    return result;
}

//-------------------filter polyfil-------------------------
const myFilter = function(callback, thisArg){
    const length = this.length;
    const result = [];
    for(let i=0;i<length;i++){
        if(callback.call(thisArg, this[i], i, this) === true){
            result.push(this[i]);
        }
    }
    return result;
}

//-------------------reduce polyfill-----------------------
const myReduce = function(callback, initialValue){
    const length = this.length;
    let iterator = 0;
    let result = initialValue;
    if(initialValue === null || initialValue === undefined){
        iterator = 1;
        result = this[0];
    }
    for(let i = iterator;i<length;i++){
        result = callback.call(undefined, result, this[i], i , this);
    }
    return result;
}


//----------------map usage experimentation--------------
Array.prototype.myMap = myMap;
const boo = foo.myMap(function (datum) {
    console.log(this);
    return datum*2;
})

//---------------filter usage experimentation---------------
Array.prototype.myFilter = myFilter;
const boo1 = foo.myFilter(datum => datum>2);

//---------------reduce usage experimentation----------------------
Array.prototype.myReduce = myReduce;
const boo3 = foo.reduce((acc, cur) => acc + cur, 100);
// console.log("boo3",boo3);

