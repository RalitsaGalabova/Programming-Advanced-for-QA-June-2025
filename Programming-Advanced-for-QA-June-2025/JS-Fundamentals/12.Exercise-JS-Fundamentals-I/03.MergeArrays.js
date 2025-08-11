function mergeArrays(arr1, arr2){
    let newArray = [];

    for(let position=0; position<=arr1.length-1; position++){
        let element1 = arr1[position];
        let element2 = arr2[position];

        if(position%2==0){
            let sum = Number(element1) + Number(element2);
            newArray.push(sum);
        }else{
            newArray.push(element1+element2)
        }
    }
    console.log(newArray.join(' - '))
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])