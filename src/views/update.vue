<template>
  <div>
    <home-header></home-header>
    <div class="updateInputs">
      <!--  <inputs-users v-show="tableEmployees" :item="employee" :tableName="tableEmployees"></inputs-users>-->
    </div>
    <div>
      <calculator-inputs v-show="tableCalculations" :item="calculation"
                         :tableName="tableCalculations"></calculator-inputs>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

// import localStorageDriver from '../middleware/local-storage/indexUsers'

import InputsUsers from "../components/inputsUsers";
import HomeHeader from "../components/homeHeader";
import CalculatorInputs from "../components/calculatorInputs";

export default {
  name: "update",
  components: {
    CalculatorInputs,
    HomeHeader,
    InputsUsers
  },
  data() {
    return {
      tableEmployees: 'employees',
      tableCalculations: 'Calculations',
      employee: {},
      calculation: {},
    }
  },
  computed: mapState('calculations', ['calculations','editedCalculationId']),
  methods: {
    ...mapMutations('employees', ['setEditedEmployee', 'setEditedEmployeeId', 'resetEditedEmployeeId']),
    ...mapMutations('calculations', ["setCalculations", "setEditedCalculationId", "resetEditedCalculationId"]),


  },
  // created() {
  //   if (this.tableEmployees && this.$route.params.id) {
  //     this.setEditedEmployeeId(this.$route.params.id)
  //         .then(() => {
  //           Object.assign(this.employee, this.editedEmployee)
  //         })
  //     }  }
}
</script>

<style scoped>

.updateInputs {
  text-align: center;
  margin-left: 500px;
}
</style>