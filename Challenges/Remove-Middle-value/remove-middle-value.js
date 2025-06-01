//  let theArray=[1,2,3,4,5];
// let theArray=[27,8,15,73,27];
let theArray=[7,9,13,25,5,17];
function removeMiddleValue(theArray){
    const middleIndex = Math.floor(theArray.length / 2);
    theArray.splice(middleIndex, 1);
    return theArray;
}
console.log(removeMiddleValue(theArray));