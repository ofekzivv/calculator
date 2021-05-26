import state from './employees.state'
import mutations from './employees.mutations'
import actions from './employees.actions'
import getters from './employees.getters'

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}