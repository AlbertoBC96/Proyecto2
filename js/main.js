class Employee{
    constructor(id,name, email, role){
        this.id = id
        this.name = name
        this.email = email
        this.role = role
    }
}

class registros{
    constructor(employees = [], targetID){
        this.employee = employee
        this.indexEmployee = 0
    }

    saveEmployee(){
        employeeName = document.getElementById("inputName").value
        employeeMail = document.getElementById("inptEmail").value
        employeeRole = document.getElementById("inputRole").value
        const newEmployee = new Employee(lastID,employeeName,employeeMail,employeeRole)
        employees.push(newEmployee)
        this.syncEmployee()
        this.addEmployee(newEmployee)
    }

    addEmployee(){
        this.indexEmployee = this.indexEmployee + 1
        if (this.indexEmployee >= this.employees.length) {
            this.indexEmployee = 0;
        }
        console.log(this.employees[this.indexEmployee])
    }

    editEmployee(){
        console.log("Editar registro")
    }

    deleteEmployee(){
        console.log("Eliminar regstro")
    }

    syncEmployee(){
        window.localStorage.setItem('employees',JSON.stringify(employees))
        employees = JSON.parse(window.localStorage.getItem('employees'))
    }
}