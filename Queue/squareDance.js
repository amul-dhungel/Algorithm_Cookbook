
function Queue(){
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
}


function enqueue(element){
    return this.dataStore.push(element)
}

function dequeue(){
    return this.dataStore.shift()
}

function front(){
    return this.dataStore[0]
}

function back(){
    return this.dataStore[this.dataStore.length -1]
}

function toString(){
    var rtrstring = ""
    for(var i = 0; i < this.dataStore.length; i++){
        rtrstring += this.dataStore[i] + "\n"
}
return rtrstring

}

function empty(){
    if(this.dataStore.length == 0){
    return true
}else{
    return false
}
}

// using of queue functionality in square dancing simulation 
var femaleDancer = ["Allsion", "Cheryl", "Jennifer", "Aurora"]
var maleDancer = ["Frank", "Mason", "Clayton", "Raymond", "Brayan", "David", "Danny"]
function dance(male, female){
    while(male != 0 && female != 0){
    var person = male.shift()
    var person2 = female.shift()
    console.log("The dance partners is "+person+" and "+person2)
}
}

dance(maleDancer,femaleDancer)

