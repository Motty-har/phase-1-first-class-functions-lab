// Code your solution in this file!
const returnFirstTwoDrivers = function(names){
    return names.slice(0,2)
}
const returnLastTwoDrivers = function(names){
    return names.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function  createFareMultiplier(num){
    return function(){
       return num * num
    }
}
const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2
}
const fareTripler = function (createFareMultiplier){
    return createFareMultiplier * 3
}
function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers)
}