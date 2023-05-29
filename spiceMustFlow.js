function spiceMustFlow(yield) {

    let days = 0
    let totalYield = 0
    let consumeFromCrew = 26


    while (yield >= 100) {
        days++
        totalYield += yield - consumeFromCrew
        yield -= 10
    }

    if (totalYield >= consumeFromCrew) {
        totalYield -= consumeFromCrew
    }

    console.log(days)
    console.log(totalYield)

}
spiceMustFlow(111)