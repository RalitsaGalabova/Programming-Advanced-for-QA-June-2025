function oddOccurances(sentence){
    let words = sentence.toLowerCase().split(' ');

    let wordsCount = {};

    for(let word of words){
        if(wordsCount[word]){
            wordsCount[word]++
        }else{
            wordsCount[word] = 1;
        }

    }

    let oddWords = [];
    for(let word in wordsCount){
        if(wordsCount[word] %2 !==0 ){
            oddWords.push(word);
        }
    }

    console.log(oddWords.join(' '));
}