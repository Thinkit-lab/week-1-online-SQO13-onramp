function filterList(arr) {
    let filteredArr = []

  for(i = 0; i < arr.length; i++) {

    if(typeof(arr[i]) === "number") {
      filteredArr.push(arr[i]);
    }
    
  }

  return filteredArr;
 }

  module.exports =filterList