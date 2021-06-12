function Queue(){
    this.dataStore = []
    this.enqueue = enqueue 
    this.dequeue = dequeue 
    // this.front = front 
    // this.back = back 
    this. toString = toString   
    // this.empty = empty 
}


function patient(name, code){
    this.name = name 
    this.code = code 
}

function dequeue(){
 var priority = this.dataStore[0].code;
console.log(priority)
  for (var i = 1; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code > priority) {

      priority = this.dataStore[i].code;
      var teBeRemove = i;
    }
  }
  return this.dataStore.splice(teBeRemove, 1);
}

function toString(){
    var rtrString = ""
    for (var i = 0; i< this.dataStore.length; ++i){
        rtrString += this.dataStore[i] + "\n"
}
    return rtrString
}

function enqueue(element){
    this.dataStore.push(element)
}

var p = new patient("Smith", 5)
var ed = new Queue()
ed.enqueue(p)
p = new patient("John", 6)
ed.enqueue(p)
p = new patient("Brown", 1)
ed.enqueue(p)
p = new patient("Ingram",1)
ed.enqueue(p)
console.log(ed.dataStore)

// dequeuing based on priority
var seen = ed.dequeue()
console.log(seen[0].name)




