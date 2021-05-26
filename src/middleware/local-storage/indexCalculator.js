export default {

    insertToDB:function (table, newCalculation) {
        newCalculation.id = new Date().getTime();

        let Calculations = this.selectFromDB(table);
        Calculations.push(newCalculation)

        localStorage.setItem(table, JSON.stringify(Calculations));
    },

    selectFromDB:function(table) {
        let Calculations = localStorage.getItem(table)
        if (!Calculations) {
            Calculations = '[]'
        }
        // if (result.length >0 ) {
        //     result = JSON.parse(result);
        // }
        return JSON.parse(Calculations);
        // another option to write result
        // return JSON.parse(localStorage.getItem('tableEmployees'))
    },

    removeFromDb:function (table,id) {
        // get from select the "item" from array[]
        let Calculations =this.selectFromDB(table);
        let foundCalculationIndex = this._searchById(table,id);
        if (foundCalculationIndex === undefined){
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
        Calculations.splice(foundCalculationIndex, 1);

        // update the array to local-storage/database
        localStorage.setItem(table, JSON.stringify(Calculations));
    },

    updateDb:function (table ,id, Calculation) {
        // get from select the "item" from array[]
        let Calculations = this.selectFromDB(table);
        let foundCalculationIndex = this._searchById(table ,id);
        if (foundCalculationIndex === undefined){
            return;
        }
        // edit the "item" in array
        for (let key in Calculation) {
            if (Calculation[key]) {
                Calculations[foundCalculationIndex][key] = Calculation[key];
            }
        }
        localStorage.setItem(table, JSON.stringify(Calculations));
    },
    getItemById(table, id){
        let Calculations = this.selectFromDB(table);
        return  Calculations.find(function (item) {
            return item.id === id;
        })
    },

    _searchById:function (table ,id) {
        let Calculations = this.selectFromDB(table);
        let foundCalculationIndex = undefined;

        for (let i = 0; i < Calculations.length; i++) {
            let Calculation = Calculations[i];
            if (Calculation.id == id) {
                foundCalculationIndex = i;
                break;
            }
        }
        return foundCalculationIndex;
    }
}