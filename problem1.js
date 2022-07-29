function carInfo(inventory, Id){
   
    if((Array.isArray(inventory))===true){
        
        if(((inventory===undefined)&&(Id===undefined))||(Id===undefined)||(inventory.length===0)||typeof(Id)!=="number") {
    
            return [];
        }
        else{
            for(let i=0;i<inventory.length;i++)
            {
                if(inventory[i]['id'] == Id)
                {
                     return inventory[i];
                }
            }
        } 
    }
    else{
        return [];
     }
 
}
 module.exports = carInfo;

