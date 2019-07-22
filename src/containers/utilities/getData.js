import BikeRental from '../../assets/bikerentals.json';

export default function getDataFromJson (indexes) {
    let data=[];
    //connects to JSON file
    let allData=BikeRental.products;
    let i=0;

    //iterates through the JSON file
    for (var productIndex in allData) {

        //selects only the id required for each request
        if(indexes.includes(allData[productIndex].id)){
        data[i]=allData[productIndex];
        i++;
        }
    }
   
    //returns only the requested data
    return data;
  }