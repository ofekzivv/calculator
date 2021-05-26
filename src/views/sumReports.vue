<template>
<div>
  <home-header/>
<summary-table :tableName="tableName"></summary-table>
</div>
</template>

<script>
import HomeHeader from "../components/homeHeader";
import SummaryTable from "../components/summaryTable";

export default {
  name: "sumReports",
  components: {
    SummaryTable,
    HomeHeader
  },
  data() {
    return{
      tableName:'tableCalculations'
    }
  }
}
</script>

<style scoped>

</style>