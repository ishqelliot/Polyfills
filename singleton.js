const Singleton = function() {
    if(globalThis?.instance === undefined || globalThis?.instance === null){
        globalThis.instance = 0;
    }
    this.increment = function(){
        globalThis.instance++;
    }
    this.decrement = function(){
        globalThis.instance--;
    }
    this.printCounter = function(){
        console.log("Counter state:",globalThis.instance);
    }
}

const obj = new Singleton();
obj.printCounter();
obj.increment();
obj.printCounter();
const obj2 = new Singleton();
obj2.printCounter();