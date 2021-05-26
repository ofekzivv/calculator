<template>
  <div class="about">
    <home-header/>
    <h1>This is an about page</h1>
    <storage-files/>
  </div>
</template>

<script>
import HomeHeader from "../components/homeHeader";
import StorageFiles from "../components/storageFiles";
export default {
  components: {StorageFiles, HomeHeader}
}
</script>
<style scoped>
h1{
  text-align: center;
  background-color: cyan;
}
</style>