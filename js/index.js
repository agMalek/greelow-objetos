/* ---------- EJERCICIO 1 ------------- */
console.log("---------- EJERCICIO 1 -------------")
let fecha = new Date()

const formatDateMMDDYY = (date) => {
    mm = (date.getMonth()+1).toString().padStart(2, '0')
    dd = date.getDate()
    yy = date.getFullYear(  )
    return `${mm}-${dd}-${yy}`
}

console.log(formatDateMMDDYY(fecha))



/* ---------- EJERCICIOS 2-3-4 ------------- */

// -------------- eje2
/* class Persona{
    
} */

// ------------ eje3
/* class Persona{
    constructor(){
        this.name = "Bob"
        this.lastName = "Dylan"
        this.birthday = "May 24, 1941"
    }
} */

// ----------- eje4
/* class Persona{
    constructor(name, lastName, birthday){
        this.name = name
        this.lastName = lastName
        this.birthday = birthday
    }
} */

/* ---------- EJERCICIOS 5 Y 6 ------------- */
console.log("---------- EJERCICIO 5 -------------")

class Printer{
    constructor(){
        this.msg = "Hello World";
        this.model = "TX-200"
    }
    printerTest() {
        return this.msg
    }
    getModel(){
        return `The model of the printer is: ${this.model}`
    }
}

let myPrinter = new Printer()
let testResult = myPrinter.printerTest()
console.log(testResult)

console.log("---------- EJERCICIO 6 -------------")
let model = myPrinter.getModel()
console.log(model)

/* ---------- EJERCICIOS 7 ------------- */
console.log("---------- EJERCICIO 7 -------------")

class Counter{
    constructor(){
        this.initialValue = 1
    }
    increaseOne(){
        this.initialValue += 1
    }
    decreaseOne(){
        this.initialValue -= 1
    }
    getValue(){
        return this.initialValue
    }
}

let myCounter = new Counter()
console.log(myCounter.getValue())
myCounter.increaseOne()
myCounter.increaseOne()
console.log(myCounter.getValue())
myCounter.decreaseOne()
myCounter.decreaseOne()
console.log(myCounter.getValue())


/* ---------- EJERCICIO 8 ------------- */
console.log("---------- EJERCICIO 8 -------------")

class Persona{
    constructor(name, lastName, birthday){
        this.name = name
        this.lastName = lastName
        this.birthday = birthday
    }
    calculateAge(){ 
        let ageDifMs = Date.now() - this.birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getAge(){
        return this.calculateAge()
    }
    canDrinkAlcohol(){
        return this.getAge() > 21
    }
}

let myPerson = new Persona("Alberto", "Malek", new Date("1999-07-18"))
let myPerson2 = new Persona("Micaela", "Perez", new Date("2003-11-04"))
console.log(myPerson.getAge(), myPerson.canDrinkAlcohol())
console.log(myPerson2.getAge(), myPerson2.canDrinkAlcohol())


/* ---------- EJERCICIO 9 ------------- */
console.log("---------- EJERCICIO 9 -------------")


class Calculadora{
    sumar(num1, num2){
        return num1+num2
    }
    restar(num1, num2){
        return num1-num2
    }
    multiplicar(num1, num2){
        return num1*num2
    }
    dividir(num1, num2){
        return num1/num2
    }
    potencia(num1, num2){
        return num1**num2
    }
}

const myCalculadora = new Calculadora()

console.log(myCalculadora.sumar(10,10))
console.log(myCalculadora.restar(10,10))
console.log(myCalculadora.multiplicar(10,10))
console.log(myCalculadora.dividir(10,10))
console.log(myCalculadora.potencia(10,10))


















