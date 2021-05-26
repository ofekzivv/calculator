<template>
  <div>
    <home-header></home-header>
<cal-numbers></cal-numbers>
  </div>
</template>

<script>
import CalNumbers from "../components/calNumbers";
import HomeHeader from "../components/homeHeader";
export default {
  name: "calculations",
  components: {HomeHeader, CalNumbers}
}
</script>

<style scoped>

</style>