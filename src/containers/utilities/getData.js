import BikeRental from '../../assets/bikerentals.json';

export default function getDataFromJson (indexes) {
    let data=[];
    let allData=BikeRental.products;
    let i=0;
    for (var productIndex in allData) {

        if(indexes.includes(allData[productIndex].id)){
        data[i]=allData[productIndex];
        i++;
        }
    }
   
    return data;
  }