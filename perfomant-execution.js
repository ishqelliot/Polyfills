const debounce = (cb, delay) => {
    let timeoutId;
    return () => {
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => cb(), delay);
    }
}

const throttle = (cb, delay) => {
    let timeoutId;
    return () => {
        if(timeoutId) return;
        timeoutId = setInterval(() => {
            cb();
            clearInterval(timeoutId);
            timeoutId = undefined;
        }, delay);
    }
}