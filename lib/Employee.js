class Employee {
    constructor(...params) {
        if (params.length > 0) {
            this.name = params[0];
        }
        if (params.length > 1) {
            this.id = params[1];
        }
        if (params.length > 2) {
            this.email = params[2];
        }
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
