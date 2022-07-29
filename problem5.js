const modelsOfCar = require("./problem4.js")
let old=[]
function carBefore2000(inventory){
for(let i=0;i<inventory.length;i++){
    if(inventory[i]['car_year']<2000){
        old.push(inventory[i])
        console.log(inventory[i]);
    }
}
console.log(old)
console.log("Length of old cars is : " + old.length);
}
module.exports = carBefore2000;

