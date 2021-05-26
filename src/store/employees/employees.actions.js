import database from '../../middleware/firebase/database';

export default {
    getEmployees: async ({commit}) => {
        const employees = await database.read({entity: 'employees'});

        commit('setEmployees', employees)
    },

    deleteEmployee: async ({state, commit}) => {
        await database.remove({entity: 'employees', id: state.editedEmployeeId});

        const employeeId = state.editedEmployeeId;

        commit('resetEditedEmployeeId')

        commit('deleteEmployee', employeeId)
    },

    updateEmployee: async ({state, commit}) => {

        const employee = {}

        Object.assign(employee, state.editedEmployee)
        employee.id = state.editedEmployeeId;

        //saves in DB
        await database.updateItem({
            entity: 'employees',
            id: employee.id,
            item: employee
        })

        //saves in store
        commit('resetEditedEmployee')
        commit('resetEditedEmployeeId')

        commit('editEmployee', employee)
    },

    insertEmployee: async ({state, commit}) => {

        const employee = {}

        Object.assign(employee, state.editedEmployee)

        //saves n DB
        employee.id = (await database.create({entity: 'employees', item: employee})).key

        //saves in store
        commit('resetEditedEmployee')

        commit('insertEmployee', employee)
    },

    setEditedEmployeeById: async ({state, commit}) => {
        let employee = {}
        if (state.employees.length && state.employees.find(employee => employee.id === state.editedEmployeeId)) {
            employee = state.employees.find(employee => employee.id === state.editedEmployeeId);
        } else {
            employee = await database.selectById({entity: 'employees', id: state.editedEmployeeId})
        }

        commit('setEditedEmployee', employee);
    }
}
