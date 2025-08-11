function employees(inputArr) {
    class Employee{
        constructor (name, personalNumber){
            this.name = name
            this.personalNumber = personalNumber
        }

        printInfo(){
            return  `Name: ${this.name} -- Personal Number: ${this.personalNumber}` 
        }
    }

    for (const element of inputArr) {
        let name = element
        let personalNumber = name.length

        let employee = new Employee(name, personalNumber)
        console.log(employee.printInfo())
    }
}