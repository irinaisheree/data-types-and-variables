function sumDigits(num){

    let numAsString = num.toString();
    let sumOfDigits = 0

    for(let i = 0; i < numAsString.length; i++){
        let curDigit = Number(numAsString[i])
        sumOfDigits += curDigit
    }
    console.log(sumOfDigits)
}
sumDigits(245678)