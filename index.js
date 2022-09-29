//Code your solutions in this file
function fiveToOneHundred(){
    for (let i = 5; i < 101; i++){
        console.log(i)
    }
}
fiveToOneHundred()

function multiplesOfThree() {
    for (let i = 3; i <= 100; i++) {
        if(i % 3 === 0) {
            console.log(i)
        }
    }
}
multiplesOfThree()

function multiplesOfThreeOrFive(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0){
        console.log (i)
            
        }
    }
}
multiplesOfThreeOrFive()

function untilNum (num) {
    for (let i = 1; i <= num; i++){
        console.log(i)
    }
}
untilNum(25)

function multiply(a, b){
    return a * b
}
console.log(multiply(5, 6))

function add(a,b){
    if(a === b) {
        return (a + b) * 3
    } else {
        return a + b
    }
}
console.log(add(9,9))

function isNegative(a){
    if (a < 0 ){
        return true
    } else { 
        return false 
    }
}
console.log(isNegative(8))