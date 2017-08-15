function ready() {
    var tbodyCtrl = document.getElementById('employees');
    var employees = [];
    var kim = new Employee("1", "Kim", new Date(), "kim@fullstackdev.com", "Full Stack Developer", true, 100000);
    var long = new Employee("2", "Long", new Date(), "long@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    var elisha = new Employee("3", "Elisha", new Date(), "elisha@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    var eric = new Employee("4", "Eric", new Date(), "eric@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    var phuc = new Employee("5", "Phuc", new Date(), "eric@fullstackdev.com", "Jr. Full Stack Developer", true, 90000);
    employees.push(kim, long, elisha, eric, phuc);
    for (var index = 0; index < employees.length; index++) {
        var employee = employees[index];
        var trData = '<tr>';
        trData += '<td>' + employee.id + '</td>';
        trData += '<td>' + employee.name + '</td>';
        trData += '<td>' + employee.dateOfHire.toDateString() + '</td>';
        trData += '<td>' + employee.email + '</td>';
        trData += '<td>' + employee.job + '</td>';
        trData += '<td>' + employee.active + '</td>';
        trData += '<td>$' + Number(employee.salary.toFixed(0)).toLocaleString() + '</td>';
        trData += '</tr>';
        tbodyCtrl.innerHTML += trData;
    }
}
;
var Employee = (function () {
    // Constructor
    function Employee(id, name, dateOfHire, email, job, active, salary) {
        this.id = id;
        this.name = name;
        this.dateOfHire = dateOfHire;
        this.email = email;
        this.job = job;
        this.active = active;
        this.salary = salary;
    }
    return Employee;
}());
