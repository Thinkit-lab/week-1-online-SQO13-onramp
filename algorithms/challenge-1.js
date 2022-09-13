function countTruthy(arr) {
    let countArr = 0;

    for (i = 0; i < arr.length; i++) {
      if (arr[i])
          countArr++;
    }
  
    return countArr;
}
module.exports = countTruthy