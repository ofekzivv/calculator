<template>
  <q-page-container>
    <home-header/>
    <div class="back-office">
      <div class="officeInputs">
        <inputs-users :tableName="'employees'"  @search="showSearch"/>
      </div>
      <table-users :tableName="'employees'"  :searchItem="searchItem" :sortedArr="sortedArr"/>
    </div>
  </q-page-container>
</template>

<script>
import HomeHeader from "../components/homeHeader";
import uiDriver from '../middleware/uiDriver/UIuser'
import InputsUsers from "../components/inputsUsers";
import TableUsers from "../components/tableUsers";

export default {
  name: "backOffice",
  components: {
    HomeHeader,
    TableUsers,
    InputsUsers
  },
  data() {
    return {
      searchItem: false,
      sortedArr:[]
    }
  },
  methods: {

    showSearch(array, employee) {
      this.sortedArr = uiDriver.searching(this.tableName, array, employee);
      this.searchItem = !this.searchItem;
    }
  }
}
</script>

<style scoped>
.officeInputs {
  margin-left: 66%
}
</style>