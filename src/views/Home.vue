<template>
<div>
 <home-header/>
  <welcome-animation/>
</div>
</template>

<script>


import HomeHeader from "../components/homeHeader";
import WelcomeAnimation from "../components/welcomeAnimation";

export default {
  name: 'Home',
  components: {
    WelcomeAnimation,
    HomeHeader
  }
}
</script>

<style>
body {
  background-image: url("https://www.morebusiness.com/wp-content/uploads/2007/10/calculator-tablet-pen.jpg");
  height: 100%;
  background-size: cover;
}
</style>