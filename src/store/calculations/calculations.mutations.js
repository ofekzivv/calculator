export default {
// Calculations
    setCalculations: ((state, Calculations) => state.calculations = Calculations),

    setEditedCalculation: ((state, Calculations) => state.editedCalculation = Calculations),

    setEditedCalculationId: ((state, id) => state.editedCalculationId = id),

    resetEditedCalculationId: ((state) => state.editedCalculationId = ''),

    resetEditedCalculation: ((state) => {
        for (const key in state.editedCalculation) {
            state.editedCalculation[key] = ''
        }
        delete state.editedCalculation.id;
    }),

    deleteEmployee: ((state, employeeId) => {
        const index = state.employees.findIndex(obj => obj.id = employeeId)
        state.employees.splice(index, 1)
    }),

    editEmployee: ((state, employee) => {
        const index = state.employees.findIndex(obj => obj.id = employee.id)
        state.employees.splice(index, 1, employee)
    }),

    insertCalculation: ((state, calculation) => {
        state.calculations.push(calculation)
    })
}