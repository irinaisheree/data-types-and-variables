function calculator(firstNum, symbol, secondNum){

    let result = 0
    switch(symbol){
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum;break;
        case "/": result = firstNum / secondNum; break;
        case "*": result = firstNum * secondNum; break;
    }

    console.log(result.toFixed(2))


}

calculator(5,
    '+',
    10
    )