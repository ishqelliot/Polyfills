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

for (let i= 0; i < 5; i++){
    setTimeout(() => { console.log(i, this)},1000);
} 