const myModule = (function() {
    let value;
    function useState(initialValue) {
        const state = value || initialValue;
        const setState = (newValue) => {
            value = newValue;
            return value;
        }
        return [state, setState];
    }
    return { useState };
})()

const [count, setCount] = myModule.useState(0);
console.log(count);
setCount(2);
const [count2, setCount2] = myModule.useState(0);
console.log(count2);