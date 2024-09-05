function check(arr){
    x = 3;
    for(var i= 0; i<=arr.length; i++){
        if (arr[i] == x){
            return i
        }
    }
    return -1
    
}
console.log(check([1,2,4,5,5]))
