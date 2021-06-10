
var numberList = []
var total = 1
function factorial(number){

   while (number > 1){
        numberList.push(number--)
}

console.log(numberList)

while(numberList.length > 0){
    total = total * numberList.pop()
}
console.log(total)
}

factorial(4)
