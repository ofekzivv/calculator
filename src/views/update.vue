<template>
  <div>
  <home-header></home-header>
    <div class="updateInputs">
  <inputs-users :item="employee" :tableName="'employees'"></inputs-users>
    </div>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

// import localStorageDriver from '../middleware/local-storage/indexUsers'

import InputsUsers from "../components/inputsUsers";
import HomeHeader from "../components/homeHeader";

export default {
  name: "update",
  components: {
    HomeHeader,
    InputsUsers
  },
  data() {
    return {
      tableName: 'employees',
      employee: {},
    }
  },
  methods: {
    ...mapMutations('employees', ['setEditedEmployee', 'setEditedEmployeeId', 'resetEditedEmployeeId']),


  },
  created() {
    if (this.$route.params.id) {
      debugger
      this.setEditedEmployeeId(this.$route.params.id)
      this.setEditedEmployeeById()
          .then(() => {
            Object.assign(this.employee, this.editedEmployee)
          })
    }
  }
}
</script>

<style scoped>

.updateInputs{
text-align: center;
  margin-left: 500px;
}
</style>