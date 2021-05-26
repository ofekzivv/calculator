<template>
  <q-page-container>
      <div>
        <home-header/>
        <calculator-inputs :tableName="tableName" ></calculator-inputs>
<!--        <result-card :tableName="tableName" :reloadCard="reloadCard"></result-card>-->
          </div>
  </q-page-container>
</template>

<script>
import HomeHeader from "../components/homeHeader";
import CalculatorInputs from "../components/calculatorInputs";
import ResultCard from "../components/resultCard";
import api from '../middleware/API/index'
import localStorageDriveCAL from '../middleware/local-storage/indexCalculator';

export default {
  name: "salaryCalculator",
  components: {
    ResultCard,
    CalculatorInputs,
    HomeHeader
  },
  data(){
    return {
      tableName: 'calculations',
      cards: [],
      reloadCard: false
    }
  },
  methods:{
    refreshCard(){
      this.reloadCard = !this.reloadCard
    }
  },
created() {
   this.cards = localStorageDriveCAL.selectFromDB(this.tableName)
}
}
</script>

<style scoped>

</style>