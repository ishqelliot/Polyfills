const ZustandImpl = require("./zustand-impl");
const useStoreState = ZustandImpl.createModule((setter) => ({
    name: "Boogey Man",
    age: 1,
    setAge: () => setter((instanceState) => ({ age: instanceState.age  + 2}))
}));


const nameFromInstance = useStoreState((instanceState) => instanceState.name);
console.log("nameFromInstance",nameFromInstance);
const ageFromInstance = useStoreState((instanceState) => instanceState.age);
console.log("ageFromInstance",ageFromInstance);
const setAgeFromInstance = useStoreState(instanceState => instanceState.setAge);
setAgeFromInstance();
console.log("old - ageFromInstance", ageFromInstance)
const updateAgeFromInstance = useStoreState((instanceState) => instanceState.age);
console.log("updateAgeFromInstance",updateAgeFromInstance);

const useStoreBear = ZustandImpl.createModule((setter) => ({
    bear: "Roarr",
    count: 0,
    incrementBear: () => setter((instanceState) => ({ count: instanceState.count  + 1}))
}));
const bearFromInstance = useStoreBear((instanceState) => instanceState.bear);
console.log("bearFromInstance",bearFromInstance);
const bearCount = useStoreBear((instanceState) => instanceState.count);
console.log("bearCount",bearCount);
const incrementBear = useStoreBear(instanceState => instanceState.incrementBear);
incrementBear();
console.log("old - bearCount", bearCount)
const updateBearCount = useStoreBear((instanceState) => instanceState.count);
console.log("updateBearCount",updateBearCount);