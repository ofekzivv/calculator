<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card" v-for="card of cards">

      <q-list>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="watch"/>
          </q-item-section>

          <q-item-section>
            <q-item-label></q-item-label>
            <q-item-label>{{ card.firstDate }}</q-item-label>
            <q-item-label>{{ card.lastDate }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="watch"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>שעות עבודה</q-item-label>
            <q-item-label>{{ card.workHours }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="watch"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>זמן הפסקה</q-item-label>
            <q-item-label>{{ card.brake }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="green" name="euro"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>שכר</q-item-label>
            <q-item-label>{{ card.wage }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-card>
  </div>

</template>

<script>
import api from '../middleware/API/index'
import localStorageDriveCAL from '../middleware/local-storage/indexCalculator';

export default {
  name: "resultCard",
  props: ['tableName', 'card', 'reloadCard'],
  data() {
    return {
      cards: []
    }
  },
  methods: {
    // readData() {
    //   this.cards = localStorageDriveCAL.selectFromDB(this.tableName)
    // }
  },
  created() {
 this.readData()
  },
  watch: {
    reloadCard(){
      this.readData()
    }
  }
}
</script>

<style scoped>
.my-card {
  background-color: #027BE3;
  border: 3px solid #000000;
  border-radius: 1em;
}
</style>