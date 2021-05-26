<template>
  <q-page-container>
  <h1>?מה השכר שלך</h1>
    <div class="calInputs" dir="rtl">
      <q-input outlined type="number" label="שכר שעתי" value="0" />
      <q-input outlined type="number" label="שכר שעתי" value="0" />
      <q-input outlined type="number" label="שכר שעתי" value="0" />
      <q-input outlined type="number" label="שכר שעתי" value="0" />
      <q-input outlined type="number" label="שכר שעתי" value="0" />

      <q-btn class="glossy" rounded color="green" label="חשב את השכר שלך" />
    </div>
  </q-page-container>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {}
  },

}
</script>

<style>
h1 {
  text-align: right;
  margin-right: 10px;
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
.calInputs{
  background-color: #fffcfc;
  margin-left: 65%;
  width: 500px;
  padding: 1em;
  border: 3px solid #000000;
  border-radius: 1em;
  font-size: 30px;
}



</style>