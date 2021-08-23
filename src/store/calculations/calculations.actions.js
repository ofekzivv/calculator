import database from '../../middleware/firebase/database';
import calculations from "../../views/calculations";
import firebaseDatabase from "../../middleware/firebase/database";
import fireStore from '../../middleware/firebase/firestore';

export default {

    getCalculations: async ({commit}) => {
        //red data from realtime database
        const Calculations = await database.read({entity: 'Calculations'});

        //read data from firestore
        // const Calculations = await fireStore.read()

        commit('setCalculations', Calculations)
    },


    insertCalculation: async ({state, commit}, LocalCalculations) => {

        const Calculation = {}
        Object.assign(Calculation, state.editedCalculation)

        // insert into firestore
        // await fireStore.add(Calculation)

        // insert into real time database
        Calculation.id = (await database.create({entity: 'Calculations', item: Calculation})).key

        //saves in store
        commit('resetEditedCalculation')

        commit('insertCalculation', Calculation)
    },

    deleteCalculation: async ({state, commit}) => {
        //delete from realtime database
        // await fireStore.remove(state.editedCalculationId)

        //delete from realtime database
        await database.remove({entity: 'Calculations', id: state.editedCalculationId});

        const CalculationId = state.editedCalculationId;

        commit('resetEditedCalculationId')

        commit('deleteCalculation', CalculationId)
    },

    updateCalculation: async ({state, commit}) => {

        const calculation = {}

        Object.assign(calculation, state.editedCalculation)
        calculation.id = state.editedCalculationId;

        // update with firestore
        await fireStore.update(calculation)

        //update in realtime database
        await database.updateItem({entity: 'Calculations', id: employee.id, employee})

        commit('resetEditedCalculation')
        commit('resetEditedCalculationId')

        commit('editCalculation', calculation)
    },

    setEditedCalculationById: async ({state, commit}) => {
        let Calculation = {}
        if (state.calculations.length && state.calculations.find(Calculation => Calculation.id === state.editedCalculationId)) {
            Calculation = state.calculations.find(Calculation => Calculation.id === state.editedCalculationId);
        } else {
            Calculation = await fireStore.getById(state.editedCalculationId)
            // Calculation = await database.selectById({entity: 'Calculations', id: state.editedCalculationId})
        }

        commit('setEditedCalculation', Calculation);
    }
}