function carYear(inventory)
{
    let modelsOfCar=[]
    for (let i = 0; i < inventory.length; i++) 
    {
        modelsOfCar.push(inventory[i]['car_year']);
    }
    return modelsOfCar;
}
module.exports = carYear;

