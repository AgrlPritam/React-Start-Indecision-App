class Person {
    constructor(name = 'Anonymous', age=0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I'm ${this.name}!`        
    }
    getDescription() {
        return `${this.name} is ${this.age} years(s) old`
    }
}

class Student extends Person {
    constructor(name,age,major='Undecided') {
        super(name,age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        if(this.hasMajor()) {
            description += ` with a major in ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greet = super.getGreeting()
        if(this.homeLocation) {
            greet += ` I am visiting from ${this.homeLocation}`
        }
        return greet
    }
}
const me = new Traveler('Pritam Agrawal');
// console.log(me.getGreeting());
// console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Person()
// console.log(other.getGreeting());
// console.log(other.getDescription());
console.log(other);

const that = new Student('Pratik', 43, 'Computer Science')
// console.log(that.getGreeting());
 console.log(that.getDescription());
console.log(that);

const their = new Traveler('Duck',4,'Macarena')
console.log(their.getGreeting());
console.log(their);