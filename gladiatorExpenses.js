function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let expenses = 0

    for(let currentFight = 1; currentFight <= lostFightsCount; currentFight++){
        if(currentFight % 2 === 0){
            expenses += helmetPrice
        }

        if(currentFight % 3 === 0){
            expenses += swordPrice
        } 
        
        if(currentFight % 6 === 0){
            expenses += shieldPrice
        }

        if(currentFight % 12 === 0){
            expenses += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5)