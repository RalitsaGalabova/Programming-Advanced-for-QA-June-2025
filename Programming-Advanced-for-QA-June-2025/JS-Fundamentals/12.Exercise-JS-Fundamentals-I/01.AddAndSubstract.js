function addAndSubstract(numbers){

    let sum = 0;
    let modifySum = 0;

    for (let position = 0; position <= numbers.length - 1; position++) {
    
            sum += numbers[position];

            if(numbers[position] %2 == 0){
                numbers[position] += position;

            }else{
                numbers[position] -= position;
            }

            modifySum += numbers[position];
    }


    console.log(numbers);
    console.log(sum);
    console.log(modifySum);

}

addAndSubstract([5, 15, 23, 56, 35]);

