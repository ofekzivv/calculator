import Vue from "vue";
import Vuex from 'vuex'
import employees from './employees'
import calculations from './calculations'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        employees,
        calculations
    }
})