// synchronous
console.log("hii");
console.log("hello1");
console.log("hello2")

// asynchronous

console.log("hello");
setTimeout(function () {
console.log("he1");

},2000)

// console.log("he2");

// constructor

// type of two constructor
// 1. class constructor

class Home {
    constructor(vill,city,state) {
        this.city=city
        this.state=state
        this.vill=vill
        
    }
}

const add = new Home ("bahuara","gorari","bihar")

console.log(add);

// 2.function constructor 

function Boy(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender

}

const allDetails = new Boy ("Ravi",22,"male")
console.log(allDetails);







