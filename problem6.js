function BMWAndAudi(inventory)
{
    let array = []
    for (let i = 0; i < inventory.length; i++) 
    {
        if (inventory[i]['car_make'] === "BMW" || inventory[i]['car_make'] === "Audi")
        {
            array.push(JSON.stringify(inventory[i]))
        }
    }
    return array;
}

module.exports = BMWAndAudi;

