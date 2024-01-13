function selectionSort(arr) {
  
    for (let i = 0 ; i < arr.length; i++) {
    let min = arr[0]
    if (arr[i+1] < min){
        min = arr[i+1]
    }

  
    if (min != arr[0]){
        let temp = arr[0]
        arr[0] = min
        arr[i+1] = temp
    } 
    }


return arr
}
module.exports = selectionSort;