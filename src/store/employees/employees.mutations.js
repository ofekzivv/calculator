export default {

    setEmployees: ((state, employees) => state.employees = employees),

    setEditedEmployee: ((state, employees) => state.editedEmployee = employees),

    setEditedEmployeeId: ((state, id) => state.editedEmployeeId = id),

    resetEditedEmployeeId: ((state) => state.editedEmployeeId = ''),

    resetEditedEmployee: ((state) => {
        for (const key in state.editedEmployee) {
            state.editedEmployee[key] = ''
        }
        delete state.editedEmployee.id;
    }),

    deleteEmployee: ((state, employeeId) => {
        const index = state.employees.findIndex(obj => obj.id = employeeId)
        state.employees.splice(index, 1)
    }),

    editEmployee: ((state, employee) => {
        const index = state.employees.findIndex(obj => obj.id = employee.id)
        state.employees.splice(index, 1, employee)
    }),

    insertEmployee: ((state, employee) => {
        state.employees.push(employee)
    })
}