// How many times do we have to roll a dice until 6 comes?
// -----------------------------------------------------------------------
// Function for grtting a randoam number
const Random = (max, min) => {
    return Math.floor(Math.random() * (max, min + 1) + min);
}
// -----------------------------------------------------------------------
const mainFunc = (NumberOfDiceRolling) => {
    let rollNumber = 0;
    for (let i = 0; i < NumberOfDiceRolling; i++) {
        let count = 1;
        let n = Random(1, 6);
        while (n != 6) {
            n = Random(1, 6);
            count += 1;
        }
        rollNumber += count
    }
    console.log(rollNumber / NumberOfDiceRolling);
}
mainFunc(10)