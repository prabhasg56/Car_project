function lastCar(inventory){

    console.log(` Last car is a ${inventory[inventory.length-1]['car_make']} ${inventory[inventory.length-1]['car_model']}`);

}
module.exports = lastCar;
