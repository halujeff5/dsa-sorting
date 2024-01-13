/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/


function pivot(arr, start, end){
    arr[0] = arr[start]
    arr[start] = arr[end]

    let arr1 = arr.slice(0,end).sort()
    let arr2 = arr.slice(end).sort()
    let children = arr1.concat(arr2)
    return children
}
// arr = [9, 5, 10, 11, 4, 13, 2, 15, 17, 19]

// pivot(arr, 0, Math.floor(arr.length/2))
/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start, end) {
    pivot(arr, 0, Math.floor(arr.length)/2) 
    quickSort(arr, Math.floor(arr.length/2), arr.length )
        

}

module.exports = quickSort;