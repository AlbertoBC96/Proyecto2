let lastID = 0

class Employee{
    constructor(id,name, email, role){
        this.id = id
        this.name = name
        this.email = email
        this.role = role
    }
}

class Registros{
    constructor(employees = [], targetID){
        this.employees = employees
        this.indexEmployee = 0
    }

    saveEmployee(){
        let employeeName = document.getElementById("inputName").value
        let employeeMail = document.getElementById("inputEmail").value
        let employeeRole = document.getElementById("inputRole").value
        lastID ++
        let newEmployee = new Employee(lastID,employeeName,employeeMail,employeeRole)

        employees.push(newEmployee)
        this.syncEmployee()
        this.addEmployee(newEmployee)
        
        document.getElementById("inputName").value = ''
        document.getElementById("inputEmail").value = ''
        document.getElementById("inputRole").value = ''
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
        // this.employees = JSON.parse(window.localStorage.getItem('employees'))
    }
}

employees = []
myEmployees = new Registros(employees)