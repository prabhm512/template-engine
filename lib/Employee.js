class Employee {
    constructor(name) {
        this.name = name;
        this.id = 0;
        this.email = "";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;
