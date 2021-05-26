<template>
  <div>
    <home-header></home-header>
    <inputs-users class="userInput" :user="specificEmployee" :tableName="'employees'"></inputs-users>
  </div>
</template>


<script>
import HomeHeader from "../components/homeHeader";
import SummaryTable from "../components/summaryTable";
import InputsUsers from "../components/inputsUsers";

export default {
  name: "employeePage",
  components: {
    InputsUsers,
    HomeHeader,
    SummaryTable
  },
  data() {
    return {
      specificEmployee:{}
    }
  },
  methods: {},

}
</script>

<style scoped>

.userInput{
  margin-left: 30%;
}
</style>