import database from '../../middleware/firebase/database';

export default {

    getCalculations: async ({commit}) => {
        const Calculations = await database.read({entity: 'Calculations'});

        commit('setCalculations', Calculations)
    },

    insertCalculation: async ({state, commit}) => {

        const Calculation = {}

        Object.assign(Calculation, state.editedCalculation)

        //saves n DB
        Calculation.id = (await database.create({entity: 'Calculations', item: Calculation})).key

        //saves in store
        commit('resetEditedCalculation')

        commit('insertCalculation', Calculation)
    },

    deleteCalculation: async ({state, commit}) => {
        await database.remove({entity: 'Calculations', id: state.editedCalculationId});

        const CalculationId = state.editedCalculationId;

        commit('resetEditedEmployeeId')

        commit('deleteEmployee', CalculationId)
    },

    updateEmployee: async ({state, commit}) => {

        const employee = {}

        Object.assign(employee, state.editedEmployee)
        employee.id = state.editedEmployeeId;

        //saves in DB
        await database.updateItem({
            entity: 'Calculations',
            id: employee.id,
            employee
        })

        //saves in store
        commit('resetEditedEmployee')
        commit('resetEditedEmployeeId')

        commit('editEmployee', employee)
    },

    setEditedCalculationById: async ({state, commit}) => {
        let Calculation = {}
        if (state.calculations.length && state.calculations.find(Calculation => Calculation.id === state.editedCalculationId)) {
            Calculation = state.calculations.find(Calculation => Calculation.id === state.editedCalculationId);
        } else {
            Calculation = await database.selectById({entity: 'Calculations', id: state.editedCalculationId})
        }

        commit('setEditedEmployee', Calculation);
    }
}
