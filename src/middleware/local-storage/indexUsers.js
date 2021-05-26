export default {

    insertToDB:function (table, newEmployee) {
        // create/add id to the "item"
        newEmployee.id = new Date().getTime();

        // get the relevant array from database
        let employees = this.selectFromDB(table);
        employees.push(newEmployee)

        // insert data to database
        localStorage.setItem(table, JSON.stringify(employees));
    },

    selectFromDB:function(table) {
        // select data from database
        let employees = localStorage.getItem(table);
        if (employees == null) {
            employees = '[]';
        }
        // if (result.length >0 ) {
        //     result = JSON.parse(result);
        // }
        return JSON.parse(employees);
        // another option to write result
        // return JSON.parse(localStorage.getItem('tableEmployees'))
    },

    removeFromDb:function (table,id) {
        // get from select the "item" from array[]
        let employees =this.selectFromDB(table);
        let foundEmployeeIndex = this._searchById(table,id);
        if (foundEmployeeIndex === undefined){
            return;
        }
        ////extra option to run on specific array and find index
        // for (let i = 0; i < employees.length; i++) {
        //     let employee = employees[i];
        //     if (employee.id == id) {
        //         foundEmployeeIndex = i;
        //         break;
        //     }
        // }

        // remove the "item" from array[]
        employees.splice(foundEmployeeIndex, 1);

        // update the array to local-storage/database
        localStorage.setItem(table, JSON.stringify(employees));
    },

    updateDb:function (table ,id, employee) {
        // get from select the "item" from array[]
        let employees = this.selectFromDB(table);
        let foundEmployeeIndex = this._searchById(table ,id);
        if (foundEmployeeIndex === undefined){
            return;
        }
        // edit the "item" in array
        for (let key in employee){
            if (employee[key]){
                employees[foundEmployeeIndex][key] = employee[key];
            }
        }
        // update the array to local-storage/database
        localStorage.setItem(table, JSON.stringify(employees));
    },
    getItemById(table, id){
        let employees = this.selectFromDB(table);
       return  employees.find(function (employee) {
            return employee.id === id;
        })
    },

    _searchById:function (table ,id) {
        let employees = this.selectFromDB(table);
        let foundEmployeeIndex = undefined;

        for (let i = 0; i < employees.length; i++) {
            let employee = employees[i];
            if (employee.id == id) {
                foundEmployeeIndex = i;
                break;
            }
        }
        return foundEmployeeIndex;
    }
}










