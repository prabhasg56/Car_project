function carModelAlphabatically(inventory){

    inventory.sort(function(a, b) {
           let data1 = a['car_model'].toUpperCase(); 
           let data2 = b['car_model'].toUpperCase();
           console.log(data1);
         if (data1 < data2) {
          return -1;
          }
         if (data1 > data2) {
           return 1;
         }
          return 0;
       });
     //console.log(inventory.car_model);
     for(let i=0; i<inventory.length; i++){
                  console.log(inventory[i].car_model)
              }
  
 }
  
// function carModelAlphabatically(inventory){
//   if((inventory.length!==undefined) && (inventory!==0)){
//       let models = []
//       for(let i=0; i<inventory.length; i++){
//           models.push(inventory[i].car_model)
//       }
//       let sortedData = models.sort()
//       console.log(sortedData);
//   }
//   else{
//       return []
//   }
  
// }
module.exports = carModelAlphabatically;
  