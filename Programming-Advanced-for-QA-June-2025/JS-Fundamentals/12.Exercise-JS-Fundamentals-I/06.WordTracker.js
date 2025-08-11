function wordTracker(words){
    let wordsToTrack = words.shift().split(' ');

    let wordOccurances = {};

    for(let word of wordsToTrack){
        wordOccurances[word] = 0;
    }

    for(let word of words){
        if(word in wordOccurances){
            wordOccurances[word]++
        }
    }

    let entries = Object.entries(wordOccurances);
    entries.sort((a, b)=> b[1] - a[1]);

    for(let [word, count] of entries){
        console.log(`${word} - ${count}`);
    }
}