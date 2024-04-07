const createModule = function(cb){
    let instance = cb(setter);
    function setter(setterCB){
        fieldStateChanged = setterCB(instance);
        instance = {...instance, ...fieldStateChanged}
    }
    function getter(getterCB){
        return getterCB(instance);
    }
    return getter;
}
module.exports.createModule = createModule;