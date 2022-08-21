// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(array) {
    let firstTwo = [array[0], array[1]]
    return firstTwo
}
console.log(returnFirstTwoDrivers(drivers))

function returnLastTwoDrivers(array) {
    let lastTwo = [array[2], array[3]]
    return lastTwo
}

console.log(returnLastTwoDrivers(drivers))

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(selectingDrivers[0])

function createFareMultiplier(x) {
    return function fareMultiplier() {
        return 5 * x
    }
}
console.log(createFareMultiplier(2))

let fareDoubler = x => x * 2;
let fareTripler = y => y * 3;

function selectDifferentDrivers(arrayOfDrivers, whichSet) {
    return whichSet(arrayOfDrivers)
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers()))