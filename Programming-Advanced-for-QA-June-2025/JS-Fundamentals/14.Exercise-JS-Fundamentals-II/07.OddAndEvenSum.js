function oddAndEvenSum(num){
    let oddSum = 0;
    let evenSum = 0;
    let digitsArray = num.toString().split('')

    for (const digit of digitsArray) {
        let currentDigit = Number(digit)

        if (currentDigit % 2 === 0){
            evenSum += currentDigit
        } else {
            oddSum += currentDigit
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(3495892137259234)