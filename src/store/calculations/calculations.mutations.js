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

    deleteCalculation: ((state, CalculationId) => {
        const index = state.calculations.findIndex(obj => obj.id = CalculationId)
        state.calculations.splice(index, 1)
    }),

    editCalculation: ((state, calculation) => {
        const index = state.calculations.findIndex(obj => obj.id = calculation.id)
        state.calculations.splice(index, 1, calculation)
    }),

    insertCalculation: ((state, calculation) => {
        state.calculations.push(calculation)
    })
}