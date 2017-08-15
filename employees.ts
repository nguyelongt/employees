

function ready() {
    var tbodyCtrl = document.getElementById('employees');

    let employees: Employee[] = [];

    let kim = new Employee("1", "Kim", new Date(), "kim@fullstackdev.com", "Full Stack Developer", true, 100000);
    let long = new Employee("2", "Long", new Date(), "long@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    let elisha = new Employee("3", "Elisha", new Date(), "elisha@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    let eric = new Employee("4", "Eric", new Date(), "eric@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    let phuc = new Employee("5", "Phuc", new Date(), "eric@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);

    employees.push(kim, long, elisha, eric, phuc);

    console.log(employees);
};

class Employee {
    // Properties
    id: string;
    name: string;
    dateOfHire: Date;
    email: string;
    job: string;
    active: boolean;
    salary: number;

    // Constructor
    constructor(id: string, name: string, dateOfHire: Date, email: string, job: string, active: boolean, salary: number) {
        this.id = id;
        this.name = name;
        this.dateOfHire = dateOfHire;
        this.email = email;
        this.job = job;
        this.active = active;
        this.salary = salary;
    }
    // Function
    
}