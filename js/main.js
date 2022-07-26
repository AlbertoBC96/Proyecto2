let lastID = 0
employees = []

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
        let section = document.createElement('tr')
        let indexNumber = document.createElement('th')
        let elementName = document.createElement('td')
        let elementEmail = document.createElement('td')
        let elementRole = document.createElement('td')
        let elementButtons = document.createElement('td')

        let editButton = document.createElement('a')
        editButton.href = '#'
        editButton.addEventListener('click',this.editEmployee)
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        
        let deleteButton = document.createElement('a')
        deleteButton.href = '#'
        deleteButton.addEventListener('click',this.deleteEmployee)
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color:red"></i>'

        indexNumber.innerHTML = this.employees[this.indexEmployee].id
        indexNumber.scope = 'row'

        elementName.innerHTML = this.employees[this.indexEmployee].name
        elementEmail.innerHTML = this.employees[this.indexEmployee].email
        elementRole.innerHTML = this.employees[this.indexEmployee].role
        
        elementButtons.appendChild(editButton)
        elementButtons.append(' / ')
        elementButtons.appendChild(deleteButton)

        section.setAttribute("id",this.indexEmployee)
        section.appendChild(indexNumber)
        section.appendChild(elementName)
        section.appendChild(elementEmail)
        section.appendChild(elementRole)
        section.appendChild(elementButtons)
        document.getElementById('employeeTable').appendChild(section);
        console.log(this.employees[this.indexEmployee])
    }

    editEmployee(){
        console.log("Editar registro")
        $('#editModal').modal('show');
    }

    deleteEmployee(){
        alert('delete clicked')
        console.log("Eliminar regstro")
    }

    syncEmployee(){
        window.localStorage.setItem('employees',JSON.stringify(employees))
        this.employees = JSON.parse(window.localStorage.getItem('employees'))
    }
}

myEmployees = new Registros(employees)