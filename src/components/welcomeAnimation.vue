<template>
  <h1>
    <span>S</span>
    <span>a</span>
    <span>l</span>
    <span>-</span>
    <span>C</span>
    <span>a</span>
    <span>l</span>
  </h1>
</template>

<script>
export default {
  name: "welcomeAnimation"
}
</script>

<style scoped>
h1 {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: #000000;
  font-size: 10em;
  font-family: sans-serif;
  letter-spacing: 0.5em;
  text-shadow: 0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0,0,0,.1),
  0 0 5px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25),
  0 10px 10px rgba(0,0,0,.2),
  0 20px 20px rgba(0,0,0,.15);
}

h1 span {
  display: inline-block;
  animation: animate 1s linear forwards;
  font-size: 170px;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: rotateY(90deg);
    filter: blur(150px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg);
    filter: blur(0px);
  }
}

h1 span:nth-child(1) {
  animation-delay: 1s;
}

h1 span:nth-child(2) {
  animation-delay: 2s;
}

h1 span:nth-child(3) {
  animation-delay: 2.5s;
}

h1 span:nth-child(4) {
  animation-delay: 3s;
}

h1 span:nth-child(5) {
  animation-delay: 3.5s;
}

h1 span:nth-child(6) {
  animation-delay: 4s;
}

h1 span:nth-child(7) {
  animation-delay: 4.5s;
}

</style>