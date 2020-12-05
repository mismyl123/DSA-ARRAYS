function urlify(string){
    let word  = string.replace('', '%20')
}

urlify('tahuna dfsdf')

function remove(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 5){
        let numArr = arr.splice(i,arr[i])
        console.log(numArr)
        }
    }
}

remove ([55,5,3,2])

// Max sum in the array

function highestSum(num){
    highestSum = 0
    currentSum = 0
    for(let i  of numbers){
        currentSum = Math.max(0,currentSum +i);
        highestSum = Math.max(highestSum, currentSum);

    }
}
