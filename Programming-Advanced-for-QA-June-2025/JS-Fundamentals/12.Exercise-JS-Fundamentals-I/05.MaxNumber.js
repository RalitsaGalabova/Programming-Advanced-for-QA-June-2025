function maxNumber(numbers){

    let topNumbers = [];

    for(let position=0; position<numbers.length-1; position++){
        let number = numbers[position];
        let isTop = true;

        for(let pos=position+1; pos<=numbers.length; pos++){
            let rightnumber = numbers[pos];
            if(number<=rightnumber){
                isTop=false;
                break;
            }
        }

        if(isTop==true){
            topNumbers.push(number);
        }
    }
    topNumbers.push(numbers[numbers.length-1])
    console.log(topNumbers.join(" "));
    
}